import express from 'express';
import RconController from './ServerController';

const RconServerRouter = express.Router();

RconServerRouter.route('/dashboard').get(RconController.MainPageRender);
RconServerRouter.route('/dashboard').post(RconController.CommandHandler);
RconServerRouter.route('/request').post(RconController.ConnectionRequest);

export default RconServerRouter;

