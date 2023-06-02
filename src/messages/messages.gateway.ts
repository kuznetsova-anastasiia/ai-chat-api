import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'socket.io';
import { openai } from 'src/openai/openai';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messagesService.create(createMessageDto);
    this.server.emit('newMessage', message);
    console.log(process.env.API_KEY);

    try {
      this.server.emit('writing');
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: createMessageDto.text }],
      });

      const responseMessage = await this.messagesService.create({
        text: response.data.choices[0].message.content,
        role: response.data.choices[0].message.role,
        chatId: createMessageDto.chatId,
      });

      this.server.emit('stopWriting');
      this.server.emit('newMessage', responseMessage);
    } catch (err) {
      this.server.emit('stopWriting');
      console.log('error', err);
    }
  }

  @SubscribeMessage('findAllMessages')
  async findAll(@MessageBody() chatId: { data: number }) {
    const messages = await this.messagesService.findAll(chatId.data);
    this.server.emit('sendAllMessages', { messages });
  }
}
