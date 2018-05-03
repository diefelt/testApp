import { Injectable } from '@angular/core';
import { DalService } from '../services/dal.service';
import { Observable } from 'rxjs/Observable';
import { Type } from '@angular/compiler/src/core';

@Injectable()
export class BllService {

  constructor(private dal: DalService) { }

  newHeroe<T>(heroe:T) : void {
    this.dal.addDocument<T>('hero', heroe);
  }

  getHeroes<T>(): any {
    return this.dal.getCollection<T>('hero');
  }

}
