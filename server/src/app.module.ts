import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { EmployeeModule } from './modules/employee.module';

@Module({
  imports: [
    EmployeeModule, 
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
