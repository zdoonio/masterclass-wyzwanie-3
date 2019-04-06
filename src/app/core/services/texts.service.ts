import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Text} from '../../text';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  private nameUrl = './assets/texts.json';

  constructor(private httpClient: HttpClient) { }

  getTexts(): Observable<Text[]> { return this.httpClient.get<Text[]>(this.nameUrl); }
}
