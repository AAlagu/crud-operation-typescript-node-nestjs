import { TypeOrmModuleOptions } from "@nestjs/typeorm"

//Database connection details
export const typeOrmConfig: TypeOrmModuleOptions ={

    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '###',
    database: 'Employee',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    logging: true,
};