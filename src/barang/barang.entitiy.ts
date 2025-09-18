import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Kategori } from '../kategori/kategori.entitiy';

@Entity('barang')
export class Barang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nama_barang' })
  namaBarang: string;

  @Column({ name: 'kategori_id' })
  kategoriId: number;

  @Column()
  stok: number;

  @Column({ name: 'kelompok_barang' })
  kelompokBarang: string;

  @Column('decimal', { precision: 15, scale: 2 })
  harga: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Kategori)
  @JoinColumn({ name: 'kategori_id' })
  kategori: Kategori;
}