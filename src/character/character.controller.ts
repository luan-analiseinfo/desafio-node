import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}
  @Get(':param')
  findById(@Param('param') param: string): Observable<AxiosResponse<any>> {
    return this.characterService.findById(param);
  }
}
