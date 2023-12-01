import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    title: String,
    color: String,
  },
  { versionKey: false },
);
