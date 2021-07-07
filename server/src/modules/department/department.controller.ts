import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Department } from './entity/department.entity';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/CreateDepartment.dto';

// CRUD Routes
@Controller('department')
export class DepartmentController {
    
    constructor(private departmentService: DepartmentService){}

    //Get all
    @Get('/')
    async getAllDeptWithEmployees(): Promise<[Department[], number]>{
        return await this.departmentService.getAllDeptWithEmployees();
    }

    // Get one by using id
    @Get('/:id')
    async getEmployeesByDeptId(@Param('id', ParseIntPipe) id: number): Promise<Department>{
        return await this.departmentService.getEmployeesByDeptId(id);
    }

    // Create new department
    @Post('/create')
    //We will pass the dto through the pipes and validation will happen.
    //Pipes are something that executed on the request.
    @UsePipes(ValidationPipe)
    async createDepartment(@Body() departmentData: CreateDepartmentDto){
        return await this.departmentService.CreateNewDepartment(departmentData);
    }
}
