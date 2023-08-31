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
      const files = req.filesData.map((file) => {
        return file.url
      })
      const user = await userService.createUser(body, files)
      res.send({ user, files: req.filesData })
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  }

  async getUserByUsername(req: Request, res: Response): Promise<void> {
    try {
      const { username } = req.params
      const user = await userService.getUserByUsername(username)
      if (!user) {
        res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
        return
      }
      res.send({ user })
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  }
}
