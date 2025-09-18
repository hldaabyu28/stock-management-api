import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBarangDto {
  @IsNotEmpty()
  @IsString()
  namaBarang: string;

  @IsNotEmpty()
  @IsNumber()
  kategoriId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  stok: number;

  @IsNotEmpty()
  @IsString()
  kelompokBarang: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  harga: number;
}