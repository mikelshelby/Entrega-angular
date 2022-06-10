import { Injectable } from '@angular/core';
import { StateService } from '@core/interfaces/state-service.interface';
import { Comic } from '@core/models/comic.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicStateService implements StateService<Comic>{
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  isLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }
  get$(): Observable<Comic[] | null> {
    throw new Error('Method not implemented.');
  }
  set(elements: Comic[]): void {
    throw new Error('Method not implemented.');
  }
  getSelected$(): Observable<Comic | null> {
    throw new Error('Method not implemented.');
  }
  setSelected(data: Comic): void {
    throw new Error('Method not implemented.');
  }
}
