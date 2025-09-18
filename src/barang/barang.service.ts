import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Barang } from './barang.entitiy';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
import { BulkDeleteDto } from './dto/bulk-delete.dto';

@Injectable()
export class BarangService {
  constructor(
    @InjectRepository(Barang)
    private barangRepository: Repository<Barang>,
  ) {}

  async create(createBarangDto: CreateBarangDto): Promise<Barang> {
    const barang = this.barangRepository.create(createBarangDto);
    return await this.barangRepository.save(barang);
  }

  async findAll(): Promise<Barang[]> {
    return await this.barangRepository.find({
      relations: ['kategori'],
      order: { id: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Barang> {
    const barang = await this.barangRepository.findOne({
      where: { id },
      relations: ['kategori']
    });
    
    if (!barang) {
      throw new NotFoundException(`Barang with ID ${id} not found`);
    }
    
    return barang;
  }

  async update(id: number, updateBarangDto: UpdateBarangDto): Promise<Barang> {
    await this.barangRepository.update(id, updateBarangDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.barangRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Barang with ID ${id} not found`);
    }
  }

  async bulkDelete(bulkDeleteDto: BulkDeleteDto): Promise<void> {
    const result = await this.barangRepository.delete({
      id: In(bulkDeleteDto.ids)
    });
    
    if (result.affected === 0) {
      throw new NotFoundException('No items found to delete');
    }
  }
}