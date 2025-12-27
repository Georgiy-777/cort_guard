import { IsBoolean, IsInt, IsNotEmpty, IsString, Max } from 'class-validator';
import { Genre } from '../entities/movie.entity';

export class CreateMovieDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Max(new Date().getFullYear())
  releaseYear: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  director: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  genre: Genre;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsBoolean()
  isPublic: boolean;
}
