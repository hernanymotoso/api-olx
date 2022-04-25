import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import User, { IUser } from '../entities/User';
import AuthConfig from '../../../config/auth';
import AppError from '../../../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: IUser;
  token: string;
}

class CreateUserSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError('Incorrect email/password conbination');
    }

    const passwordMatched = await compare(password, user.passwordHash);
    if (!passwordMatched) {
      throw new AppError('Incorrect email/password conbination', 401);
    }

    const token = sign({}, AuthConfig.jwt.secret, {
      subject: user.id,
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateUserSessionService;
