import express from 'express';
import { authRouter } from './modules/auth/auth.router';

const app = express();

const bootstrap = async () => {

    app.use(express.json());
    app.use(authRouter)

    app.listen(3000, () => {
        console.log("Server has been started");
    });
}

bootstrap().catch(console.error);