import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  searchComic(filters?: { [term: string]: any }): Observable<Comic[]> {
    const params = new HttpParams().appendAll(filters ? filters : {});
    const url = `${environment.api_server}/v1/public/comics`;
    return this.http
      .get(url, { params })
      .pipe(
        map((resp: any) =>
          resp.data.results.map((comic: any) => new Comic(comic))
        )
      );
  }
}
