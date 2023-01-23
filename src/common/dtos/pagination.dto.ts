import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitCOnvertions: true en el main inside Pipes
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitCOnvertions: true en el main inside Pipes
  offset?: number;
}
