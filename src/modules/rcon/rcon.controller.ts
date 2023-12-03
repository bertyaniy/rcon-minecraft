import { Request, Response } from 'express';
import { Rcon } from 'rcon-client';

export class RconController {
    rcon: Rcon | undefined;

    constructor() {}

    public async connect(host: string, port: number, password: string, res: Response) {

        try {
            this.rcon = await Rcon.connect({
                host: host, port: port, password: password
            });
            return res.sendStatus(200);
        } catch (error) {
            return res.status(500).send(error);
        }
        
    }

    public async execute(req: Request, res: Response) {

        const { command } = req.body;

        if (this.rcon == undefined || !command) {
            return res.sendStatus(404);
        }

        try {
            const response = await this.rcon.send(command);
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }

    }

    public async disconnect(res: Response) {

        if (!this.rcon) {
            console.log("RCON NOT FOUND");
            return res.sendStatus(404);
        }
        
        try {
            console.log(this.rcon);
            await this.rcon.end();
            this.rcon = undefined;
            return res.sendStatus(200);
        } catch (error) {
            return res.status(500).send(error);
        }

    }

}