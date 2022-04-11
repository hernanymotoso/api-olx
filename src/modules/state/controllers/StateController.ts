import { Request, Response } from 'express';
import ListStateService from '../services/ListStateService';

class StateController {
  public async List(request: Request, response: Response) {
    try {
      const listStateService = new ListStateService();

      const states = await listStateService.execute();

      return response.status(200).json(states);
    } catch (err) {
      return response.json({ error: err });
    }
  }
}

export default StateController;
