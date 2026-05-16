import { Module } from '@nestjs/common';
import { ProductController } from 'src/module/product/product.controller';
import { ProductModule } from 'src/module/product/product.module';

@Module({ controllers: [ProductController], imports: [ProductModule] })
export class RouterProduct {}
