import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangService } from './barang.service';
import { BarangController } from './barang.controller';
import { Barang } from './barang.entitiy';
import { Kategori } from '../kategori/kategori.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Barang, Kategori])],
  controllers: [BarangController],
  providers: [BarangService],
})
export class BarangModule {}