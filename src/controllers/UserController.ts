import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: "Pedro Gabriel", email: "devpedrogabriel@gmail.com" },
  { name: "Pedro Gabriel 2", email: "devpedrogabriel@gmail.com2" }
];

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async sendEmail(req: Request, res: Response){
    const result: string = EmailService.sendMail({
      to: {
        name: 'Pedro Gabriel',
        email: 'devpedrogabriel@gmail.com'
      },
      message: {
        subject: 'Assunto teste',
        body: 'Corpo teste',
        attachment: ['file1', 'file2']
      }
    });

    return res.send({ result });
  }
}

export default new UserController();
