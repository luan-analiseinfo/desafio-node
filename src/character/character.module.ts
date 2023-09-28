import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
