import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.Component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes','sports','jogging','materials']



  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string):void{
    this.showCategory.emit(category);
  }


}


