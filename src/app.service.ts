import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}
  async getHello(): Promise<any> {
    return await this.connection.query('select getdate()');
  }
}
