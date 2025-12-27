import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  description?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsBoolean()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  completed?: boolean;
}
