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
  passwordHash: {
    isLength: {
      options: { min: 2 },
    },
    errorMessage: 'Senha precisa ter pelo menos 2 caracteres',
  },
  state: {
    notEmpty: true,
    errorMessage: 'Estado não preenchido',
  },
  // state
});
