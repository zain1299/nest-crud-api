import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddEmployeesDto } from './dto/addEmployees.dto';
import { DeleteEmployeesDto } from './dto/deleteEmployee.dto';
import { UpdateEmployeesDto } from './dto/updateEmployees.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('getEmployees')
  async getEmployees(): Promise<any> {
    return await this.appService.getEmployees();
  }

  @Post('addEmployees')
  async getInsert(@Body() Dto: AddEmployeesDto): Promise<any> {
    return await this.appService.AddEmployee(Dto);
  }

  // @Put(':id')
  // update(@Body() updatedItemDto: CreateItemsDto, @Param('id') id): string {
  //   return `Updated Id ${id} Name: ${updatedItemDto.name} Description: ${updatedItemDto.description}`;
  // }

  @Post('updateEmployee/:id')
  async getUpdate(
    @Body() Dto: UpdateEmployeesDto,
    @Param('id') id: number,
  ): Promise<any> {
    let data = await this.appService.getUpdate(Dto, id);

    return data;
  }

  @Delete('deleteEmployee/:id')
  async deleteEmployee(@Param('id') id: number): Promise<any> {
    let data = await this.appService.deleteEmployee(id);

    return data;
  }
}
