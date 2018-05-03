import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Type } from '@angular/compiler/src/core';
import { Where} from '../models/where';
import { WhereFilterOp } from '@firebase/firestore-types';

@Injectable()
export class DalService {

  
  constructor(private db: AngularFirestore) { }

  getDocument<T>(ref:string) {

    return this.db.doc<T>(ref);
  }

  setDocument<T>(ref: string, obj:T){
    return this.db.doc(ref).set(obj);
  }

  updateDocument(ref: string, obj:{}){
    return this.db.doc(ref).update(obj);
  }

  deleteDocument(ref: string){
    return this.db.doc(ref).delete();
  }

  addDocument<T>(ref: string, data: T) : void{
    this.db.collection<T>(ref).add(data);
  }

  getCollection<T>(ref: string){
    return this.db.collection<T>(ref).valueChanges();
  }

  queryCollection<T>(path: string, where?: Where[], orderBy?: string, limit?: number){

    let collection = this.db.collection<T>(path);

    where.forEach(item => {
      collection.ref.where(item.field, item.operator, item.value);
    });

    if(orderBy){
      collection.ref.orderBy(orderBy, "desc");
    }

    if(limit){
      collection.ref.limit(limit);
    }
    
    return collection.valueChanges();
  }



}
