import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseDto } from './create-expenses.dto';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {}
