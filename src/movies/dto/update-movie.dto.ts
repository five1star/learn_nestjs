import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

//부분 타입(partial types)
//@nestjs/mapped-types는 타입을 변환시키고 사용할 수 있게 하는 패키지
