import { iMailProvider, iMessage } from "../iMailProvider";
import nodemailder from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements iMailProvider{
  private transporter: Mail;
  constructor(){
    this.transporter = nodemailder.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1031bc2ff8a15f",
        pass: "3b102870967314"
     }

    })
  }
  
  
  

  
  async sendMail(message: iMessage): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: message.from.email
        },
        subject: message.subject,
        html: message.body
      })
  }
}