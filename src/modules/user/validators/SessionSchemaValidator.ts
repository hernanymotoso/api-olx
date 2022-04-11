import { checkSchema } from 'express-validator';

const sessionSchemaValidator = checkSchema({
  email: {
    notEmpty: true,
    isEmail: true,
    normalizeEmail: true,
    errorMessage: 'Invalid Email',
  },
  password: {
    trim: true,
    isString: true,
    notEmpty: true,
    errorMessage: 'Invalid password',
  },
});

export { sessionSchemaValidator };
