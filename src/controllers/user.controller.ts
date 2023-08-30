import { IUserController } from '@/interfaces/user.interface'
import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { createUserInputValidator } from '@/validators/user.validator'
import { UserService } from '@/services/user.service'

const userService = new UserService()
export default class UserController implements IUserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const body = createUserInputValidator.parse(req.body)
      const user = await userService.createUser(body)
      res.send(user)
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  }
}
