import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'pad-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;
  cart: IProduct[] = [];

  getImageUrl(product:IProduct){
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountClass(product: IProduct){
    return product.discount > 0 ? 'strikethrough' : '';
  }

  addToCart(product: IProduct){
      
  }

}
