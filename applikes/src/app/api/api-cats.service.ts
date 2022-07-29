import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cats } from '../cats/cats';
import { data } from '../fake-model/fake-data';

@Injectable({
  providedIn: 'root'
})
export class ApiCatsService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cats = data;
    return {cats};
  }

}
