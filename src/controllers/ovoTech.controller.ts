import { Body, Controller, Post } from '@nestjs/common';
import { IDadosLote } from 'src/interfaces/ovoTech';
import { OvoTechService } from 'src/services/ovoTech.service';

@Controller()
export class OvoTechController {
  constructor(private readonly appService: OvoTechService) {}

  @Post('send-ovo-tech')
  async sendOvoTech(@Body() message: IDadosLote) {
    const messageJson = JSON.stringify(message);
    //   console.log(message);

    const data = await this.appService.OvoTechIA(messageJson);
    return { message: data };
  }
}
