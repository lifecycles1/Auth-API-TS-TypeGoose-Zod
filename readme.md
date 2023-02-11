## init typescript

npx tsc --init

# install dev dependencies

npm install -D typescript ts-node-dev @types/express @types/config pino-pretty @types/nodemailer @types/lodash @types/jsonwebtoken

# install dependencies

npm install express mongoose @typegoose/typegoose config zod argon2 pino dayjs nanoid nodemailer lodash jsonwebtoken dotenv

1. Register a user
2. verify user's email address
3. send forgot password email
4. reset password
5. get current user
6. login
7. access token
8. refresh tokens

# technology

typescript - static type checking
express 5 - web server
typegoose - mongoose wrapper for creating typescript interfaces and models
argon2 - password hashing
zod - validation
jsonwebtoken - signin and verifying json web tokens
nodemailer - sending emails
pino - logging
config - managing configuration

# test with postman
