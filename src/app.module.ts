import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}?authSource=admin`),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
