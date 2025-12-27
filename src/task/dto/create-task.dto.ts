import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsBoolean()
  completed: boolean;
}
