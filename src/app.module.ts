import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], //url을 가져오고 함수를 실행(like 라우터)
  providers: [MoviesService], //
})
export class AppModule {}

//데코레이터는 클래스에 함수 기능을 추가할 수 있다.
