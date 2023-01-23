import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString({ each: true }) // Cada uno de los elementos debe cumplir la condición de ser string
  @IsArray()
  sizes: string[];

  @IsIn(['men', 'women', 'kids', 'unisex'])
  gender: string;

  @IsString({ each: true }) // Cada uno de los elementos debe cumplir la condición de ser string
  @IsArray()
  @IsOptional()
  tags: string[];
}
