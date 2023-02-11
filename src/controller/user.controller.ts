import { Request, Response } from "express";
import { CreateUserInput, ForgotPasswordInput, ResetPasswordInput, VerifyUserInput } from "../schema/user.schema";
import { createUser, findUserByEmail, findUserById } from "../service/user.service";
import log from "../utils/logger";
import sendEmail from "../utils/mailer";
import { nanoid } from "nanoid";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>, res: Response) {
  const body = req.body;

  try {
    const user = await createUser(body);

    await sendEmail({
      from: "test@example.com",
      to: user.email,
      subject: "Please verify your email",
      text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
    });
    return res.send("User created successfully");
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("User with that email already exists");
    }
    return res.status(500).send(e);
  }
}

export async function verifyUserHandler(req: Request<VerifyUserInput>, res: Response) {
  const { verificationCode, id } = req.params;

  //find the user by id
  const user = await findUserById(id);
  if (!user) {
    return res.send("Could not find user");
  }

  // check to see if they are already verified
  if (user.verified) {
    return res.send("User is already verified");
  }

  // check to see if the verificationCode matches
  if (user.verificationCode === verificationCode) {
    user.verified = true;
    await user.save();
    return res.send("User verified successfully");
  }
  return res.send("Could not verify user");
}

export async function forgotPasswordHandler(req: Request<{}, {}, ForgotPasswordInput>, res: Response) {
  const message = "If a user with that email is registered you will receive a password reset email";
  // find the user by email
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    log.debug(`User with email ${email} does not exist`);
    return res.send(message);
  }
  if (!user.verified) {
    return res.send("User is not verified");
  }

  // generate a password reset code
  const passwordResetCode = nanoid();
  user.passwordResetCode = passwordResetCode;
  await user.save();

  // send an email with the password reset code
  await sendEmail({
    to: user.email,
    from: "test@example.com",
    subject: "Reset your password",
    text: `Password reset code: ${passwordResetCode}. Id ${user._id}`,
  });

  log.debug(`Password reset email sent to ${email}`);
  return res.send(message);
}

export async function resetPasswordHandler(req: Request<ResetPasswordInput["params"], {}, ResetPasswordInput["body"]>, res: Response) {
  const { passwordResetCode, id } = req.params;
  const { password } = req.body;

  // find the user by id
  const user = await findUserById(id);
  if (!user || !user.passwordResetCode || user.passwordResetCode !== passwordResetCode) {
    return res.status(400).send("Could not reset user password");
  }

  // update the user's password
  user.passwordResetCode = null;
  user.password = password; // we can set this password normally without hash because we have a pre('save') hook on the model
  await user.save();

  return res.send("Password reset successfully");
}

export async function getCurrentUserHandler(req: Request, res: Response) {
  return res.send(res.locals.user);
}
