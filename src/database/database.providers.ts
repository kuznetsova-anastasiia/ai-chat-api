import { Sequelize } from 'sequelize-typescript';
import { Chat } from 'src/chats/chats.model';
import { Message } from 'src/messages/messages.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.DB_URL);
      sequelize.addModels([Chat, Message]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
