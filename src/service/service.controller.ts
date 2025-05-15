import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator/get-user.decorator';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@GetUser() user: any, @Body() dto: CreateServiceDto) {
    return this.serviceService.create(user.userId, dto);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }
}
