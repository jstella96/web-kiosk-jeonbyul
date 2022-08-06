import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { OptionsModule } from './options/options.module';
import { FoodsModule } from './foods/foods.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        synchronize: true, //프로덕션에서는 사용하면 안됨.
        namingStrategy: new SnakeNamingStrategy(),
        autoLoadEntities: true,
        //dropSchema: true,

      }),
      inject: [ConfigService],
    }),
    CategoriesModule,
    OptionsModule,
    FoodsModule,
    OrderModule,
  ],
})
export class AppModule {}
