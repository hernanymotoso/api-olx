import { hash } from 'bcryptjs';
import User, { IUser } from '../entities/User';

import AppError from '../../../errors/AppError';

class CreateUserService {
  public async execute(data: IUser): Promise<IUser> {
    const user = await User.findOne({ email: data.email });
    console.log(data.email);
    console.log('User', user);

    if (user) {
      throw new AppError('email already registered');
    }

    const hashedPassword = await hash(data.passwordHash, 8);

    const newUser = await User.create({
      name: data.name,
      email: data.email,
      state: data.state,
      passwordHash: hashedPassword,
    });

    return newUser;
  }
}

export default CreateUserService;
