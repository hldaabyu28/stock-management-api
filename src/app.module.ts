import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barang } from './barang/barang.entitiy';
import { Kategori } from './kategori/kategori.entitiy';
import { BarangModule } from './barang/barang.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',     
      database: 'product',
      entities: [Barang, Kategori],
      synchronize: true, 
    }),
    BarangModule,
  ],
})
export class AppModule {}
