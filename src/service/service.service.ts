import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateServiceDto) {
    return this.prisma.service.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async findAll() {
    return this.prisma.service.findMany({
      include: { user: true },
    });
  }
}
