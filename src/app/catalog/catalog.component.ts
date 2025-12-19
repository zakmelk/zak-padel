import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pad-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(){
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: IProduct){
      this.cartSvc.add(product);
      this.router.navigate(['/cart']);
  }

  getFilteredProducts(){
    return this.filter === '' ? this.products :
      this.products.filter((product: any) => this.filter === product.category);
  }
    



}
