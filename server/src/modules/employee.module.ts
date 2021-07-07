import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department/department.controller';
import { DepartmentRepository } from './department/department.repository';
import { DepartmentService } from './department/department.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeRepository } from './employee/employee.repository';
import { EmployeeService } from './employee/employee.service';

//grouping related components(to keep code organized)
@Module({
    controllers: [EmployeeController, DepartmentController],
    imports: [TypeOrmModule.forFeature([EmployeeRepository, DepartmentRepository])], 
    providers: [EmployeeService, DepartmentService]
})
export class EmployeeModule {}
