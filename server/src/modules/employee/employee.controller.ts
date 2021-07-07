import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartmentService } from '../department/department.service';
import { CreateEmployeeDto } from './dto/CreateEmployee.dto';
import { Employee } from './entity/employee.entity';
import { EmployeeService } from './employee.service';

// CRUD Routes
@Controller('employee')
export class EmployeeController {
    
    constructor(
        private employeeService: EmployeeService, 
        private departmentService: DepartmentService,
    ){}

    //Get all employees
    @Get('/')
    getAllEmployee(){
        return this.employeeService.getAllEmployees();
    }

    //Insert into employee    
    @Post('/create')
    //We will pass the dto through the pipes and validation will happen.
    //Pipes are something that executed on the request.
    @UsePipes(ValidationPipe)
    async createEmployee(@Body() employeeData: CreateEmployeeDto): Promise<Employee>{
        const dept = await this.departmentService.getEmployeesByDeptId(employeeData.deptId);
        return await this.employeeService.CreateNewEmployee(employeeData, dept);
    }

    //Update 
    @Put('/:id')
    async updateEmp(
        @Body() employeeData: CreateEmployeeDto,
        @Param('id', ParseIntPipe) id: number): Promise<void> 
    {
        const employee = await this.employeeService.getEmployeesById(id);

        await this.employeeService.updateEmp(employee, employeeData);
    }

    // Delete
    @Delete('/:id')
    async deleteEmp(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.employeeService.deleteEmp(id);
    }
}
