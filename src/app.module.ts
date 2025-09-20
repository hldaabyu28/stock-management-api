import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Barang } from './barang/barang.entitiy';
import { Kategori } from './kategori/kategori.entitiy';
import { BarangModule } from './barang/barang.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT', '4000')),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        ssl: { rejectUnauthorized: true },
        entities: [Barang, Kategori],
        synchronize: false,
      }),
    }),
    BarangModule,
  ],
})
export class AppModule {}
