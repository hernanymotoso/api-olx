import mongoose, { Schema, Model } from 'mongoose';

mongoose.Promise = global.Promise;

interface IUserSchema {
  name: string;
  email: string;
  state: string;
  passwordHash: string;
  token: string;
}

const modelSchema = new Schema<IUserSchema>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  state: String,
  passwordHash: String,
  token: String,
});

const modelName = 'User';

let User: Model<IUserSchema> = {} as Model<IUserSchema>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  User = mongoose.connection.models[modelName];
} else {
  User = mongoose.model<IUserSchema>(modelName, modelSchema);
}

export default User;
