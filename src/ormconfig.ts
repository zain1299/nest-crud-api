import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

const config: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'KHI-M10126',
  port: 57096,
  username: 'faranraza',
  password: 'Portal@123',
  database: 'products2',
  entities: [],
  synchronize: true,
};
export default config;
