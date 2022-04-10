import mongoose, { Schema, Model } from 'mongoose';

mongoose.Promise = global.Promise;

interface IStateSchema {
  name: string;
}

const modelSchema = new Schema<IStateSchema>({
  name: { type: String, required: true },
});

const modelName = 'State';

let State: Model<IStateSchema> = {} as Model<IStateSchema>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  State = mongoose.connection.models[modelName];
} else {
  State = mongoose.model<IStateSchema>(modelName, modelSchema);
}

export default State;
