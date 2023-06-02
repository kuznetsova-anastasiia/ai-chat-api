import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {
  async create(createMessageDto: CreateMessageDto) {
    const message = await Message.create({
      text: createMessageDto.text,
      role: createMessageDto.role ? createMessageDto.role : 'user',
      chatId: createMessageDto.chatId,
    });

    return message;
  }

  async findAll(chatId: number) {
    const messages = await Message.findAll({
      where: { chatId },
    });
    return messages;
  }
}
