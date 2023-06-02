export class CreateMessageDto {
  text: string;
  chatId: number;
  role?: 'user' | 'assistant' | 'system';
}
