import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Kategori } from './kategori.entitiy';

@Injectable()
export class KategoriService {
  constructor(
    @InjectRepository(Kategori)
    private kategoriRepository: Repository<Kategori>,
  ) {}

  async findAll(): Promise<Kategori[]> {
    return await this.kategoriRepository.find({
      order: { id: 'DESC' },
    });
  }
}
