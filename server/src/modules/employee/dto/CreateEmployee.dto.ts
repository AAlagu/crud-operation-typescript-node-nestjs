import { IsNotEmpty, IsNumber, Length } from "class-validator";

// Validation on Employee columns
export class CreateEmployeeDto{

   @IsNotEmpty({message: 'Must have Employee name'})
   @Length(3, 255)
   EmpName: string;

   Designation: string; 

   @IsNumber()
   Salary: number;

   @IsNotEmpty()
   deptId: number;
   
}





