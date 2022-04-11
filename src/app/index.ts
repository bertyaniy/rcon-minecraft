import chalk from "chalk";
import path from "path";

import LoginRouter from "./login/router";
import RconServerRouter from './RconServer/ServerRouter';

import express from "express";
const app = express();

(async function bootstrap() {

    
    app.use(express.json());
    app.use('/static', express.static(path.resolve("static")));
    
    app.use(LoginRouter);
    app.use(RconServerRouter);

    app.get('/ping', (req, res) => {
        res.status(200).end("Pong");
    });

    app.listen(3000, () => {
        console.log(chalk.bgGreenBright.blackBright("Сервер запущен успешно!"));
    })
})();