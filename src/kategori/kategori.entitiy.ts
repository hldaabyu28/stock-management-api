import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kategori')
export class Kategori {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nama_kategori' })
  namaKategori: string;
}