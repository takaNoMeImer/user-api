import { Router } from 'express';
import { createUser, userTest } from '../controllers/User.controller';

const router = Router();

router.post("/create", createUser);
router.get("/test", userTest);

export default router;