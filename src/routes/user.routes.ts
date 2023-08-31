import UserController from '@/controllers/user.controller'
import { Router } from 'express'
import { uploadMultiS3 } from '@/middlewares/multer.middleware'

const { createUser, getUserByUsername } = new UserController()

const router = Router()

router.post('/', uploadMultiS3(), createUser)
router.get('/:username', getUserByUsername)

export default router
