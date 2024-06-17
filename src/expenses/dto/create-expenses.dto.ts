import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;
}
