import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../../employee/entity/employee.entity";

//This will create Department table in Postgres
@Entity('Department')
export class Department extends BaseEntity{

    @PrimaryGeneratedColumn({
        type: 'integer',
        comment: 'The Departement unique identifier'
    })
    Id: number;

    @Column({
        type: 'varchar',
    })
    DeptName: string;

    //One dept has many employees
    //where Dept contains multiple instances of Emp, but Emp contains only one instance of Dept.
    @OneToMany(() => Employee, (employee) => employee.dept)
    employees: Employee[];
}