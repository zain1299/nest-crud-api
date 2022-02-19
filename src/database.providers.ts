import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'KHI-M10126',
        port: 57096,
        username: 'faranraza',
        password: 'Portal@123',
        database: 'products2',
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
