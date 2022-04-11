import { Request, Response } from "express";
import path from "path";
import { Rcon } from 'rcon-client';

class RconController {
    
    static rcon: Rcon;

    static MainPageRender(req: Request, res: Response) {
        res.sendFile(path.resolve("public/mainpage.html"));
    }

    static async ConnectionRequest(req: Request, res: Response) {
        if (!req.body) return res.sendStatus(400);

        const host = req.body.host;
        const port = req.body.port;
        const password = req.body.password;

        try {
            RconController.rcon = await Rcon.connect({
                host: host, port: port, password: password
            });
            
            console.log("RCON connected");

            return res.sendStatus(200);


        } catch (error) {

            return res.status(500).send(error);
            
        }

    }

    static async CommandHandler(req: Request, res: Response) {
        if (!req.body) return res.sendStatus(400);

        const command = req.body.command;

        try { 

            // console.log(command);

            const answer = await RconController.rcon.send(command);

            console.log(answer);

            return res.status(200);

        } catch(error) {

            return res.status(500).send(error);

        }
    }
}

export default RconController;