import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CharacterModule, HttpModule]
})
export class AppModule {}
