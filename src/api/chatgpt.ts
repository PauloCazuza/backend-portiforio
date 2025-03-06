import { ConfigService } from '@nestjs/config';
import axios from 'axios';

export const api = (configService: ConfigService) => {
  return axios.create({
    baseURL: 'https://api.deepseek.com',
    headers: {
      // Authorization: `Bearer ${configService.get<string>('API_KEY_CHAT')}`,
      Authorization: `Bearer ${configService.get<string>('API_KEY_CHAT_DEEP')}`,
    },
  });
};
