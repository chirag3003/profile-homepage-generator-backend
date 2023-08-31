import { Request, Response } from 'express'
import { CreateUserInput } from '@/validators/user.validator'

export interface IUserController {
  createUser(req: Request, res: Response): Promise<void>

  getUserByUsername(req: Request, res: Response): Promise<void>
}

export interface IUserService {
  getUserByEmail(email: string): Promise<IUser | null>

  getUserById(id: string): Promise<IUser | null>

  getUserByUsername(username: string): Promise<IUser | null>

  createUser(user: CreateUserInput, images: string[]): Promise<IUser>
}
