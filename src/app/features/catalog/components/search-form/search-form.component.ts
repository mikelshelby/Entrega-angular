import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cm-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.minLength(4)]),
    year: new FormControl<number | null>(null, [
      Validators.min(1900),
      Validators.max(2022),
    ]),
  });

  get name() {
    return this.searchForm.get('name');
  }
  get year() {
    return this.searchForm.get('year');
  }

  @Output()
  searchChange: EventEmitter<{ [term: string]: any }> = new EventEmitter<{
    [term: string]: any;
  }>();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.searchForm.valid) {
      this.searchChange.emit(this.searchForm.value);
    }
  }
}
