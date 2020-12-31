import { IsNumber, IsOptional, IsString } from 'class-validator'; // 패키지 살펴보기

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

//데이터 전송 객체(Data Transfer Object)
//쿼리에 대해 유효성 검사를 하게 함
