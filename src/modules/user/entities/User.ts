import mongoose, { Schema, Model } from 'mongoose';

mongoose.Promise = global.Promise;

export interface IUser {
  name: string;
  email: string;
  state: string;
  passwordHash: string;
  // token: string;
}

const modelSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    state: String,
    passwordHash: String,
    // token: String,
  },
  {
    timestamps: true,
  },
);

const modelName = 'User';

let User: Model<IUser> = {} as Model<IUser>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  User = mongoose.connection.models[modelName];
} else {
  User = mongoose.model<IUser>(modelName, modelSchema);
}

export default User;
