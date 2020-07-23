import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'; 
  }

  getEmployees(): any {

    return [
      {
        id: 1,
        name: 'Venkat',
        gender: 'Male'
      },
      {
        id: 2,
        name: 'Frank',
        gender: 'Male'
      },
      {
        id: 3,
        name: 'jawahar',
        gender: 'Male'
      }
    ]; 
  }
}
