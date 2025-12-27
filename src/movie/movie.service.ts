import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  public async getAllMovies(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  public async getMovieById(id: number): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOneByOrFail({
      id,
    });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  public async createMovie(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);

    return await this.movieRepository.save(movie);
  }

  public async updateMovie(id: number, dto: CreateMovieDto): Promise<boolean> {
    const movie = await this.getMovieById(id);
    Object.assign(movie, dto);
    await this.movieRepository.save(movie);
    return true;
  }

  public async delete(id: number): Promise<number> {
    const movie = await this.getMovieById(id);

    await this.movieRepository.remove(movie);

    return movie.id;
  }
}
