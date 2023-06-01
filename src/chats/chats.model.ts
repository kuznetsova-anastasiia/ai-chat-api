import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Chat extends Model {
  @Column
  title: string;

  @Column
  userId: string;
}
