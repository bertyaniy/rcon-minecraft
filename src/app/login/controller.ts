import { Request, Response } from 'express';
import path from 'path'

class LoginController {

    LoginPageRender(req: Request, res: Response) {
        res.sendFile(path.resolve('public/signin.html'));
    }
}

export default new LoginController();