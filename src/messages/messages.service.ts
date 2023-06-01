import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';
import { openai } from 'src/openai/openai';

@Injectable()
export class MessagesService {
  async create(createMessageDto: CreateMessageDto) {
    const message = await Message.create({
      text: createMessageDto.text,
      role: 'user',
      chatId: createMessageDto.chatId,
    });

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: createMessageDto.text }],
    });

    const responseData = await Message.create({
      text: response.data.choices[0].message.content,
      role: response.data.choices[0].message.role,
      chatId: createMessageDto.chatId,
    });

    return responseData;
  }

  async findAll(chatId: number) {
    const messages = await Message.findAll({
      where: { chatId },
    });
    return messages;
  }
}
