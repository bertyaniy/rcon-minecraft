import express from 'express';
import { AuthController } from './auth.controller';

const authRouter = express.Router();

authRouter.route('/auth').post(AuthController.connectionRequest);
authRouter.route('/disconnect').post(AuthController.disconnect);

export { authRouter };