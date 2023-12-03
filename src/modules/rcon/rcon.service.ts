import { Request, Response } from 'express';
import { RconController } from './rcon.controller'

const rcon  = new RconController();

export class AuthController {

    public async connect(req: Request, res: Response) {

        if (!req.body) {
            return res.sendStatus(400);
        }

        const { host, port, password } = req.body;
        await rcon.connect(host, port, password, res);
    }

    public async disconnect(req: Request, res: Response) {
        await rcon.disconnect(res);
    }

    public async execute(req: Request, res: Response) {
        await rcon.execute(req, res);
    }
}