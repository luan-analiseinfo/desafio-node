import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}
  @Get()
  findAll(): Observable<AxiosResponse<any>> {
    return this.characterService.findAll();
  }
}
