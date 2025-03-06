import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGPTController } from './controllers/chatgpt.controller';
import { OvoTechController } from './controllers/ovoTech.controller';
import { ChatGPTService } from './services/chatgpt.service';
import { EmailService } from './services/mail.service';
import { OvoTechService } from './services/ovoTech.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get<string>('API_KEY_CHAT'));
        return {
          transport: {
            host: 'smtp.mailersend.net',
            secure: false,
            auth: {
              user: configService.get<string>('USER_EMAIL'),
              pass: configService.get<string>('PASS_EMAIL'),
            },
          },
          defaults: {
            from: `"Repositorio" <${configService.get<string>('USER_EMAIL')}>`,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, ChatGPTController, OvoTechController],
  providers: [AppService, EmailService, ChatGPTService, OvoTechService],
})
export class AppModule {}
