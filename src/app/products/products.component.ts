import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../Models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({required : true}) product:Iproduct
  @Output() buy =new EventEmitter<string>()

  OnByClicked()
  {
    this.buy.emit(this.product.title)//should be price or the all object and u chose
  }

}
