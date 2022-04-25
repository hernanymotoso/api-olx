import { hash } from 'bcryptjs';
import mongoose from 'mongoose';
import User, { IUser } from '../entities/User';
import State from '../../state/entities/State';
import AppError from '../../../errors/AppError';

class CreateUserService {
  public async execute(data: IUser): Promise<IUser> {
    const user = await User.findOne({ email: data.email });
    if (user) {
      throw new AppError('email already registered');
    }

    // Verifica se o estado exi ste
    if (mongoose.Types.ObjectId.isValid(data.state)) {
      const stateItem = await State.findById(data.state);
      if (!stateItem) {
        throw new AppError('Estado nao existe');
      }
    } else {
      throw new AppError('Codigo de estado invalido');
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
