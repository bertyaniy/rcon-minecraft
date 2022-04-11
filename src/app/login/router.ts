import express from 'express';
import LoginController from './controller';

const LoginRouter = express.Router(); 

LoginRouter.route('/signin').get(LoginController.LoginPageRender);

export default LoginRouter;