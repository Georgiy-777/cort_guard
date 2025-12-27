import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: string) {
    return this.movieService.getMovieById(+id);
  }

  @Post()
  createMovie(@Body() data: CreateMovieDto) {
    return this.movieService.createMovie(data);
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() data: CreateMovieDto) {
    return this.movieService.updateMovie(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(+id);
  }
}
