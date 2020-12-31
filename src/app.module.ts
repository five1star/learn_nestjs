import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], //
  providers: [], //
})
export class AppModule {}

//데코레이터는 클래스에 함수 기능을 추가할 수 있다.
//dependency injection
