import express from 'express';

import { RconService } from "./rcon/rcon.service";

const router = express.Router();

const auth = new RconService();

router.route('/auth').post(auth.connect);
router.route('/disconnect').post(auth.disconnect);

router.route('/exec').post(auth.execute);

export { router };
