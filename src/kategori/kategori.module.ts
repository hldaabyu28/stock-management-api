import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kategori } from '../kategori/kategori.entitiy';
import { KategoriController } from '../kategori/kategori.controller';
import { KategoriService } from '../kategori/kategori.service';


@Module({
  imports: [TypeOrmModule.forFeature([Kategori])],
  controllers: [KategoriController],
  providers: [KategoriService],
})
export class KategoriModule{}