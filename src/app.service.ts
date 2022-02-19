import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}
  async getHello(): Promise<any> {
    return await this.connection.query('select getdate()');
  }

  public async getEmployees(): Promise<any> {
    let data: any[] = await this.connection.query(`exec GetAllEmployee`);

    return data;
  }

  async AddEmployee(Dto): Promise<any> {
    let data: any[] = await this.connection
      .query(`exec AddEmployee '${Dto.firstName}',
      '${Dto.lastName}','${Dto.email}','${Dto.mobile}','${Dto.salary}' `);

    var obj = null;
    if (data === null) {
      obj = {
        StatusCode: 400,
      };
    } else {
      obj = {
        StatusCode: 200,
      };
    }
    return obj;
  }

  // async getUpdate(Dto): Promise<any> {
  //   let data: any = await this.connection
  //     .query(`exec UpdateEmployee @firstName = '${Dto.firstName}',
  //      @lastName ='${Dto.lastName}',@email ='${Dto.email}',@mobile = '${Dto.mobile}',@salary = '${Dto.salary}',@id = ${Dto.id}`);
  //   return data;
  // }

  async getUpdate(Dto, id): Promise<any> {
    let data: any[] = await this.connection
      .query(`exec UpdateEmployee ${id},'${Dto.firstName}',
       '${Dto.lastName}','${Dto.email}','${Dto.mobile}','${Dto.salary}'`);

    var obj = null;
    if (data === null) {
      obj = {
        StatusCode: 400,
      };
    } else {
      obj = {
        StatusCode: 200,
      };
    }
    return obj;
  }

  async deleteEmployee(id): Promise<any> {
    let data: any = await this.connection.query(`exec DeleteEmployee ${id}`);

    var obj = null;
    if (data === null) {
      obj = {
        StatusCode: 400,
      };
    } else {
      obj = {
        StatusCode: 200,
      };
    }
    return obj;
  }
}
