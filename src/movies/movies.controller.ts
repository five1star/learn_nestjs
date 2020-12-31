import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entites/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(@Req() req, @Res() res): Movie[] {
    // express앱에 접근 가능하다.그러나 좋은 방법은 아니다. NestJS는 두 개의 프레임워크에서 작동한다. Fastify에서도 작동할수있다.
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear) {
  //   return `we are searching for a movie with made after:${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() updateMovie: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovie);
  }
}
/*
//Single-Responsibility Principle (SRP)
*/
