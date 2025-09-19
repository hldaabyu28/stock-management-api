import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Barang } from './barang/barang.entitiy';
import { Kategori } from './kategori/kategori.entitiy';
import { BarangModule } from './barang/barang.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Barang, Kategori],
      synchronize: true, // ⚠️ Hanya aktifkan di dev
      ssl: {
        rejectUnauthorized: false, // penting untuk koneksi Supabase
      },
    }),
    BarangModule,
  ],
})
export class AppModule {}
