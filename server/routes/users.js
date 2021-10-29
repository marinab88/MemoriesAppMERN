import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

router.post("/singin", signin);
router.post("/singup", signup);

export default router;