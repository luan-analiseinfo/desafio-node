import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CharacterService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  findAll(): Observable<AxiosResponse<any>> {
    const apiUrl = this.configService.get<string>('API_URL' + '/character/1');
    return this.httpService.get(apiUrl).pipe(map((response) => response.data));
  }
}
