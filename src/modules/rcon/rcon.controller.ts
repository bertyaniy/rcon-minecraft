import { Response, Request } from 'express';
import { Rcon } from 'rcon-client';

export class RconController {
    static rcon: Rcon;

    public static async connect(host: string, port: number, password: string, res: Response) {

        try {
            this.rcon = await Rcon.connect({
                host: host, port: port, password: password
            });
            return res.sendStatus(200);
        } catch (error) {
            return res.status(500).send(error);
        }
        
    }

    public static async execute(req: Request, res: Response) {

        const { command } = req.body;

        if (!command) {
            return res.status(404);
        }

        try {
            await this.rcon.send(command);
            return res.status(200);
        } catch (error) {
            return res.status(500).send(error);
        }

    }

    public static async disconnect(res: Response) {
        
        try {
            await this.rcon.end();
            return res.status(200);
        } catch (error) {
            return res.status(500).send(error);
        }

    }

}