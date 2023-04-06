import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema({
  name: { type: String},
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  cpf: { type: String, required: true },
  password: { type: String },
});

export default mongoose.model<IUser>('User', userSchema);
