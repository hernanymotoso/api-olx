import mongoose, { Schema, Model } from 'mongoose';

mongoose.Promise = global.Promise;

interface ICategorySchema {
  name: string;
  slug: string;
}

const modelSchema = new Schema<ICategorySchema>(
  {
    name: { type: String, required: true },
    slug: String,
  },
  {
    timestamps: true,
  },
);

const modelName = 'Category';

let Category: Model<ICategorySchema> = {} as Model<ICategorySchema>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  Category = mongoose.connection.models[modelName];
} else {
  Category = mongoose.model<ICategorySchema>(modelName, modelSchema);
}

export default Category;
