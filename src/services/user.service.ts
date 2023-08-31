import { IUserService } from '@/interfaces/user.interface'
import { User } from '@/models/user.model'
import { CreateUserInput } from '@/validators/user.validator'

export class UserService implements IUserService {
  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email })
    return user as IUser
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await User.findById(id)
    return user as IUser
  }

  async getUserByUsername(username: string): Promise<IUser | null> {
    const user = await User.findOne({ username })
    return user as IUser
  }

  async createUser(data: CreateUserInput, images: string[]): Promise<IUser> {
    const user = await User.create({
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      username: data.username,
      github: data.github,
      linkedIn: data.linkedIn,
      profileImg: images[0],
      bannerImg: images[1],
    })
    return user as IUser
  }
}
