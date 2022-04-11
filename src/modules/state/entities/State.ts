import mongoose, { Schema, Model, Document } from 'mongoose';

mongoose.Promise = global.Promise;

export interface IState extends Document {
  name: string;
}

const modelSchema = new Schema<IState>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const modelName = 'State';

let State: Model<IState> = {} as Model<IState>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  State = mongoose.connection.models[modelName];
} else {
  State = mongoose.model<IState>(modelName, modelSchema);
}

export default State;
