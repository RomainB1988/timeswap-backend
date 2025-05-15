import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { PrismaModule } from '../prisma/prisma.module'; // 👈 important !

@Module({
  imports: [PrismaModule], // 👈 ajoute ça ici
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
