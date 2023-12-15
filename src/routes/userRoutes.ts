import express, { Router } from 'express';
import getAllUsers from '../controllers/getAllUsers.js';

const router: Router = express.Router();

router.get('/all', getAllUsers);

export default router