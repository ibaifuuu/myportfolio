import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private isShrunkSubject = new Subject<boolean>();
  isShrunk$: Observable<boolean> = this.isShrunkSubject.asObservable();

  setIsShrunk(isShrunk: boolean) {
    this.isShrunkSubject.next(isShrunk);
  }


  constructor() { }
}
