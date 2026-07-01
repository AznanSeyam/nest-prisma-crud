import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [DatabaseModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
