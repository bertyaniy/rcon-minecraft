import express from 'express';
import { RconController } from './rcon.controller';

const rconRouter = express.Router();

rconRouter.route('/exec').post(RconController.execute);

export { rconRouter };