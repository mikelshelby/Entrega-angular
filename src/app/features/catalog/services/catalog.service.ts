import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '@core/interfaces/pagination.interface';
import { Comic } from '@core/models/comic.model';
import { ComicApiService } from '@core/services/comic-api.service';
import { ComicStateService } from '@core/services/comic-state.service';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(
    private comicApi: ComicApiService,
    private comicState: ComicStateService,
    private router: Router,
  ) {}

  get comics$(): Observable<Comic[] | null> {
    return this.comicState.get$();
  }

  get pagination$(): Observable<Pagination> {
    return this.comicState.getPagination$();
  }

  get loading$(): Observable<boolean> {
    return this.comicState.isLoading$();
  }



  searchComic(filters?: { [term: string]: any }) {
    this.comicState.setLoading(true);
    this.comicApi
      .list(filters)
      .pipe(finalize(() => this.comicState.setLoading(false)))
      .subscribe(
        (resp) => {
          this.comicState.set(resp.results);
          this.comicState.setPagination({
            page: resp.offset / resp.limit + 1,
            totalPages: Math.ceil(resp.total / resp.limit),
            limit: resp.limit,
          });
          // this.comicState.setLoading(false);
        },
        // (error) => this.comicState.setLoading(false)
      );
  }

  get selected$():Observable<Comic | null>{
    return this.comicState.getSelected$();
  }
  getComic(comic:Comic){
    this.comicState.setSelected(comic);
    this.router.navigate(['/catalog/detail']);
  }
}
