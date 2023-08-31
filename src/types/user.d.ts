interface IUser {
  _id: string | ObjectId
  email: string
  name: string
  username: string
  about: string
  github?: string
  linkedIn?: string
  profileImg?: string
  bannerImg?: string
}
