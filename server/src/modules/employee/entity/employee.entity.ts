import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "../../department/entity/department.entity";

//This will create Employee table in Postgres
@Entity('Employees')
export class Employee extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: 'The Employee unique identifier'
    })
    EmpId: number;

    @Column({
        type: 'varchar',
    })
    EmpName: string;

    @Column({
        type: 'varchar',
    })
    Designation: string; 

    @Column({
        type: 'integer',
    })
    Salary: number;

    //Many employees related to one Department
    @ManyToOne(() => Department, (dept) => dept.employees)
    dept: Department;
}