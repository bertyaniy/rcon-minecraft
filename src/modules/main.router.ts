import express from 'express';

import { AuthController } from "./rcon/rcon.service";

const router = express.Router();

const auth = new AuthController();

router.route('/auth').post(auth.connect);
router.route('/disconnect').post(auth.disconnect);

router.route('/exec').post(auth.execute);

export { router };
