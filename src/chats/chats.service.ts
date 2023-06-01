import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './chats.model';

@Injectable()
export class ChatsService {
  async create(createChatDto: CreateChatDto) {
    const chat = await Chat.create({
      title: createChatDto.title,
      userId: createChatDto.userId,
    });
    return chat;
  }

  async findAll(userId: string) {
    const chats = await Chat.findAll({
      where: { userId },
    });
    return chats;
  }

  async remove(id: number) {
    const chat = await Chat.destroy({
      where: { id },
    });
    return chat;
  }
}
