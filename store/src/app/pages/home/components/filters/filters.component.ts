import { Subscription } from 'rxjs';
import { StoreService } from './../../../../services/store.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.Component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;



  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe((response)=>{this.categories = response});
  }

  onShowCategory(category: string):void{
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe();
    }
  }
}


