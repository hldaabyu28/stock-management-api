import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBarangDto {
  @IsNotEmpty()
  @IsString()
  nama_barang: string;

  @IsNotEmpty()
  @IsNumber()
  kategori_id: number;

  @IsNotEmpty()
  @IsNumber()
  stok: number;

  @IsNotEmpty()
  @IsString()
  kelompok_barang: string;

  @IsNotEmpty()
  @IsNumber()
  harga: number;
}
