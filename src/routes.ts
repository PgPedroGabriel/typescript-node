import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get("/users", UserController.index);
routes.get("/sendmail", UserController.sendEmail);

export default routes;
