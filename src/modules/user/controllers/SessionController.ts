import { Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';
import CreateUserSessionService from '../services/CreateUserSessionService';

class SessionController {
  public async execute(request: Request, response: Response) {
    try {
      const createUserSessionService = new CreateUserSessionService();
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        response.status(401).json({ error: errors.mapped() });
      }
      const data = matchedData(request);
      const session = await createUserSessionService.execute({
        email: data.email as string,
        password: data.password as string,
      });

      console.log('MATCHED data=');
      return response.json(session);
    } catch (err) {
      return response.json({ error: err });
    }
  }
}

export default SessionController;
