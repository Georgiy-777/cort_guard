import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class ReviewDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(10)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Max(10)
  rating: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsUUID()
  movieId: string;
}
