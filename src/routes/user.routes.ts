import express from "express";
import { createUserHandler, forgotPasswordHandler, getCurrentUserHandler, resetPasswordHandler, verifyUserHandler } from "../controller/user.controller";
import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";
import { createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from "../schema/user.schema";

const router = express.Router();

// create user
router.post("/api/users", validateResource(createUserSchema), createUserHandler);

// verify user
router.post("/api/users/verify/:id/:verificationCode", validateResource(verifyUserSchema), verifyUserHandler);

// request reset password
router.post("/api/users/forgotpassword", validateResource(forgotPasswordSchema), forgotPasswordHandler);

// reset password
router.post("/api/users/resetpassword/:id/:passwordResetCode", validateResource(resetPasswordSchema), resetPasswordHandler);

// get current user
router.get("/api/users/me", requireUser, getCurrentUserHandler);

export default router;
