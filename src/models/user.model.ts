import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    github: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
export const User = mongoose.model('user', userSchema)
