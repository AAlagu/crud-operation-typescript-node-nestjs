import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department } from "./entity/department.entity";
import { DepartmentRepository } from "./department.repository";
import { CreateDepartmentDto } from "./dto/CreateDepartment.dto";

// to implement & isolate business logic
@Injectable()
export class DepartmentService{
    
    constructor(
        @InjectRepository(DepartmentRepository) private departmentRepository: DepartmentRepository,
    ){}

    async getAllDeptWithEmployees(): Promise<[Department[], number]>{
        return await this.departmentRepository
        .createQueryBuilder('dept')
        .leftJoinAndSelect('dept.employees', 'emp')
        .getManyAndCount();
    }
    
    async getEmployeesByDeptId(id: number): Promise<Department>
    {
        return await this.departmentRepository.findOne(id, {relations: ['employees']});
    }

    async CreateNewDepartment(department: CreateDepartmentDto)
    {
        return await this.departmentRepository.save(department);
    }
}