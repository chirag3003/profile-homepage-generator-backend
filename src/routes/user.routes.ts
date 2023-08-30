import UserController from '@/controllers/user.controller'
import { Router } from 'express'
import { uploadSingleS3 } from '@/middlewares/multer.middleware'

const { createUser } = new UserController()

const router = Router()

router.post('/', uploadSingleS3(), createUser)

export default router
