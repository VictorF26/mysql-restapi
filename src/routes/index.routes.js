import {Router} from 'express'
import {pingpong} from '../controllers/index.controller.js'

const router = Router();

router.get('/ping', pingpong)

export default router;