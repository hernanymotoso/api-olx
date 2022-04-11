import { checkSchema } from 'express-validator';

export const userSchemaValidator = checkSchema({
  name: {
    trim: true,
    notEmpty: true,
    isString: true,
    errorMessage: 'Name is required',
  },
  email: {
    isEmail: true,
    normalizeEmail: true,
    errorMessage: 'Invalid e-mail',
  },
  // state
});
