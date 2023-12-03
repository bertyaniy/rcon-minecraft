import express from 'express';
import { router } from './modules/main.router';

const app = express();

const bootstrap = async () => {

    app.use(express.json());
    app.use(router);

    app.listen(3000, () => {
        console.log("Server has been started");
    });
}

bootstrap().catch(console.error);