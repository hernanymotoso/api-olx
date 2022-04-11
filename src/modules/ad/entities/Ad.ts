import mongoose, { Schema, Model } from 'mongoose';

mongoose.Promise = global.Promise;

interface IImageProps {
  url: string;
  default: boolean;
}
interface IAdSchema {
  idUser: string;
  state: string;
  category: string;
  images: IImageProps[];
  dateCreated: Date;
  title: string;
  price: number;
  priceNegotiable: boolean;
  description: string;
  views: number;
  status: string;
}

const modelSchema = new Schema<IAdSchema>(
  {
    idUser: { type: String, required: true },
    state: String,
    category: String,
    images: [Object],
    dateCreated: Date,
    title: String,
    price: Number,
    priceNegotiable: Boolean,
    description: String,
    views: Number,
    status: String,
  },
  {
    timestamps: true,
  },
);

const modelName = 'Ad';

let Ad: Model<IAdSchema> = {} as Model<IAdSchema>;

if (mongoose.connection && mongoose.connection.models[modelName]) {
  Ad = mongoose.connection.models[modelName];
} else {
  Ad = mongoose.model<IAdSchema>(modelName, modelSchema);
}

export default Ad;
