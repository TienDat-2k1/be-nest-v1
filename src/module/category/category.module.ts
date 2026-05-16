import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryRepositoryModule } from './repo/category.repository.module';

@Module({
  controllers: [],
  imports: [CategoryRepositoryModule],
  exports: [CategoryService],
  providers: [CategoryService],
})
export class categoryModule {}
