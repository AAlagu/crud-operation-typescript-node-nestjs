import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department } from "../department/entity/department.entity";
import { CreateEmployeeDto } from "./dto/CreateEmployee.dto";
import { Employee } from "./entity/employee.entity";
import { EmployeeRepository } from "./employee.repository";

// to implement & isolate business logic
@Injectable()
export class EmployeeService{
    
    constructor(
        @InjectRepository(EmployeeRepository) private employeeRepository: EmployeeRepository,
    ){}
    
    async CreateNewEmployee(
        employee: CreateEmployeeDto, 
        department: Department,
        ): Promise<Employee>
    {
        const newEmp = await this.employeeRepository.save(employee);

        department.employees = [...department.employees, newEmp];
        await department.save();

        return newEmp;
    }

    async getEmployeesById(id: number): Promise<Employee>
    {
        return await this.employeeRepository.findOne({
            where: { EmpId: id },
        });
    }

    async getAllEmployees(): Promise<[Employee[], number]>
    {
        return await this.employeeRepository
        .createQueryBuilder('emp')
        .leftJoin('emp.dept', 'dept')
        .select([
            'emp.EmpId',
            'emp.EmpName', 
            'emp.Designation', 
            'emp.Salary', 
            'dept.Id'
        ]).getManyAndCount();
    }

    async updateEmp(
        employee: Employee,
        newEmp: CreateEmployeeDto,
      ): Promise<void> 
    {   
        employee.Designation = newEmp.Designation;
        employee.Salary = newEmp.Salary;

        await this.employeeRepository.update(employee.EmpId, employee);
    }
    
    async deleteEmp(id: number): Promise<void> 
    {
        await this.employeeRepository.delete(id);
    }
}