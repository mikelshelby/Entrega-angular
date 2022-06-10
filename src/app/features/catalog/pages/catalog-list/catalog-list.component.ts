import { Component, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  comics: Comic[] = [];
  page: number = 1;
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {}

  search(search: { [term: string]: any }) {
    console.warn('Búsqueda', search);
    this.catalogService.searchComic(search).subscribe((resp) => {
      this.comics = resp;
    });
  }
}
