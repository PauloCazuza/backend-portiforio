import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { api } from 'src/api/chatgpt';
import { IChatGPT } from 'src/interfaces/chatgpt';

@Injectable()
export class ChatGPTService {
  constructor(private readonly configService: ConfigService) {}

  async sendChatGPT(message: string) {
    const fetch = api(this.configService);
    const res = await fetch.post<IChatGPT>('chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Meu nome é Paulo Roberto Lopes e tenho 26 anos e dado esse desenvolvedor com essas experiencias: Experiência Profissional: Desenvolvedor e TechLead com experiência em desenvolvimento de aplicativos e liderança de equipe. Bolsista de iniciação científica em 2018: Desenvolveu um aplicativo React Native com integração com Firebase, que inclui um chatbot e um fórum online em tempo real e está disponivel na loja da Google play store. Grendene S/A (2020-Atual): Ingressou como estagiário e rapidamente avançou para os cargos de Desenvolvedor I, Desenvolvedor II e Analista de Sistemas I e II. Atualmente, como TechLead de soluções, lidera uma equipe dedicada à criação de soluções inovadoras em tecnologia. Habilidades Técnicas: Experiência em .NET Core, ReactJS, React Native, Firebase e Progress 4GL.Formação Acadêmica: Graduado em Ciência da Computação. Pretencao salarial a combinar. Disponivel para Home office. Disponivel para CLT e PJ. Nasci em 04 de janeiro de 1998. Formas de contato email: prlopes_@hotmail.com e numero particular +55 (088) 994393335 tambem podendo ser acionado via whatsaap .Comeca imediatamente. Responda as futuras perguntas sobre ele. Considere que estamos no ano de 2024',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const { data } = await res;

    return data.choices[0].message.content;
  }
}
