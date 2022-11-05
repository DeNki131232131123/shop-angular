import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'Shoes',
    discription: 'There is a description',
    image: 'https://via.placeholder.com/150'
  };
  @Output() addToCard = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddToClick(): void{
    this.addToCard.emit(this.product);
  }
  onAddToCart(): void{
    this.addToCard.emit(this.product)
  }

}
