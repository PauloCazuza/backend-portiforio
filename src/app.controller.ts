import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './services/mail.service';

@Controller()
export class AppController {
  constructor(private readonly appService: EmailService) {}

  @Get('send-email')
  async sendEmail(
    @Query('to') to: string,
    @Query('subject') subject: string,
    @Query('message') message: string,
  ) {
    await this.appService.sendEmail(to, subject, message);
    return { message: 'E-mail enviado com sucesso!' };
  }
}
