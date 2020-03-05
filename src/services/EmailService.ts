interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage
}

// Data Transfer Object (DTO)

class EmailService {
  sendMail({ to, message }: IMessageDTO): string {
    return `Email enviado para ${to.email}, ${to.name}, com o assunto: ${message.subject}`;
  }
}

export default new EmailService();
