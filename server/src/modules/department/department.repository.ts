import { EntityRepository, Repository } from "typeorm";
import { Department } from "./entity/department.entity";

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {}