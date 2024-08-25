import { Component, EventEmitter, Output, output } from '@angular/core';
import { Iproduct } from '../Models/IProduct';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  


  product : Iproduct ={
    title: '',
    description: '',
    imgurl: ''
  }

  @Output() ProductAdded=new EventEmitter<Iproduct>();

  OnAddProduct()
  {
    this.ProductAdded.emit(this.product)
    this.product = { title: '', description: '', imgurl: '' };
  }


}
