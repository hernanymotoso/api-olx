import AppError from '../../../errors/AppError';
import User, { IUser } from '../entities/User';

export default class ShowProfileService {
  public async execute(userId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}
