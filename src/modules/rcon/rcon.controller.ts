import { Response } from 'express';
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

    public static async execute(res: Response, command: string) {

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