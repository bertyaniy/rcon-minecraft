import { Request, Response } from 'express';
import { RconController } from '../rcon/rcon.controller'

export class AuthController {

    public static async connectionRequest(req: Request, res: Response) {

        if (!req.body) {
            return res.sendStatus(400);
        }

        const { host, port, password } = req.body;
        await RconController.connect(host, port, password, res);
    }

    public static async disconnect(req: Request, res: Response) {
        await RconController.disconnect(res);
    }
}