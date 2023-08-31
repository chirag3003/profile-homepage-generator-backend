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
    about: {
      type: String,
      default: '',
    },
    linkedIn: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    bannerImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
export const User = mongoose.model('user', userSchema)
