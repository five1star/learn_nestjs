import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from './entites/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear) {
  //   return `we are searching for a movie with made after:${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() moviedata) {
    return this.moviesService.create(moviedata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updatemovie) {
    return this.moviesService.update(id, updatemovie);
  }
}
/*
//Single-Responsibility Principle (SRP)
*/
