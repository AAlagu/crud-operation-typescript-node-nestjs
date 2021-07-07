import { IsNotEmpty, IsNumber, Length } from "class-validator";

// Validation on Department columns
export class CreateDepartmentDto{
   
   @Length(3, 255)
   DeptName: string;
}





