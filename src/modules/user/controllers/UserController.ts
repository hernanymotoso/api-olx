import { Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';
import CreateUserService from '../services/CreateUserService';
import { IUser } from '../entities/User';

class UserController {
  public async execute(request: Request, response: Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        response.json({ error: errors.mapped() });
      }
      console.log('Create usre');

      const data = matchedData(request);

      const createUserService = new CreateUserService();

      const user = await createUserService.execute(data as IUser);

      return response.status(200).json(user);
    } catch (err) {
      return response.json({ error: err });
    }
  }
}

export default new UserController();
