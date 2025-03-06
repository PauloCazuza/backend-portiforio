import { Controller, Get, Query } from '@nestjs/common';
import { ChatGPTService } from 'src/services/chatgpt.service';

@Controller()
export class ChatGPTController {
  constructor(private readonly appService: ChatGPTService) {}

  @Get('send-chatgpt')
  async sendChaGPT(@Query('message') message: string) {
    const data = await this.appService.sendChatGPT(message);
    return { message: data };
  }

  @Get()
  async getHello() {
    return { message: 'HELLO WORD' };
  }
}
