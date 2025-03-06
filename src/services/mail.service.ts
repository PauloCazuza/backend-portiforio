import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      subject: subject,
      text: body,
    });
  }
}
