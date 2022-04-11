import { Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';

class SessionController {
  public async execute(request: Request, response: Response) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(401).json({ error: errors.mapped() });
    }
    const data = matchedData(request);

    console.log('MATCHED data=', data);
  }
}

export default SessionController;
