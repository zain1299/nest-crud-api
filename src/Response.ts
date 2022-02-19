import { StatusCodeEnum } from './StatusCodeEnum';

export class Responced<T> {
  Message?: string;
  Body?: T;
  Error?: string;
  StatusCode: StatusCodeEnum;
}
