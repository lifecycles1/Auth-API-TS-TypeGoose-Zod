export default {
  port: 3000,
  dbUri: "mongodb://127.0.0.1:27017/test",
  logLevel: "info",
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
  refreshTokenPrivateKey: process.env.REFRESH_PRIVATE_KEY,
  refreshTokenPublicKey: process.env.REFRESH_PUBLIC_KEY,
  smtp: {
    user: "jkninfrc42ey5pwx@ethereal.email",
    pass: process.env.ETHEREAL_MAIL_TEST_PASS,
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
  },
};
