import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';

class ProfileController {
  public async execute(request: Request, response: Response) {
    // console.log('profileId', request.user.id);
    try {
      console.log('profileId', request.user.id);
      const showProfileService = new ShowProfileService();
      console.log('profileId', request.user.id);
      const user = await showProfileService.execute(request.user.id);

      return response.status(200).json(user);
    } catch (err) {
      console.log('error', err);
      return response.status(400).json({ error: err });
    }
  }
}

export default new ProfileController();
