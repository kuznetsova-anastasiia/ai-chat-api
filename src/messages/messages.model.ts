import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Message extends Model {
  @Column
  text: string;

  @Column
  role: 'assistant' | 'system' | 'user';

  @Column
  chatId: string;
}
