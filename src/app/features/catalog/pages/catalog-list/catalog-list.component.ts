import { Component, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  comics: Comic[] = [
    new Comic({
      title: 'Dinastía de M',
      description:
        'Ad exercitation non esse enim ea officia quis minim do do amet exercitation officia velit.',
      images: [{ path: 'https://picsum.photos/200', extension: '' }],
    }),
  ];
  page: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
