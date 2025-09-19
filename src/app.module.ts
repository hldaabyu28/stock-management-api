import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangModule } from './barang/barang.module';
import { ConfigModule } from '@nestjs/config';
import { Barang } from './barang/barang.entitiy';
import { Kategori } from './kategori/kategori.entitiy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Barang, Kategori],
      synchronize: false, 
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    BarangModule,
  ],
})
export class AppModule {}