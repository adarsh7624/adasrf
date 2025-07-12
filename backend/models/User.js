import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  points: { type: Number, default: 0 },
  role: { type: String, default: 'user' }
});

export default mongoose.model('User', userSchema);
