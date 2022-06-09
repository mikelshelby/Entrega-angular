import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
