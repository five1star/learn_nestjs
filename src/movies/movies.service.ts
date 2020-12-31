import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entites/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id)); // parseInt(id)를 +id로 대체 가능
    if (!movie) {
      throw new NotFoundException(`Movie with id:${id} not found. `);
      //nest js가 제공하는 예외처리
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(moviedata) {
    console.log('here');
    this.movies.push({
      id: this.movies.length + 1,
      ...moviedata,
    });
  }

  update(id: string, updatemovie) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updatemovie });
  }
}
