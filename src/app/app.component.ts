import { Component } from '@angular/core';
import { Iproduct } from './Models/IProduct';
import { ProductsArray } from './Models/ProductsDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EcommerceTask';

  ProductsArray=ProductsArray;

  OnAddProduct(Productt:Iproduct)
  {
      ProductsArray.push({
      title:Productt.title,
      description:Productt.title,
      imgurl:Productt.imgurl
    })
  }

  OnBuy(product:string)
  {
    console.log("buy button clicked and the price is " + product)

  }
}
