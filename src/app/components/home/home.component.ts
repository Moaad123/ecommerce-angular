import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  couraselProducts : Product[] = []
  products : Product[] = []
  productSubscription : Subscription | undefined ;

  constructor(private productService : ProductService,private route: Router) { }
  ngOnInit(): void {
    this.productSubscription = this.productService.getProductsLimit().subscribe(
      (productList : any) => {
        this.products = productList["products"] ;
      }
    )
    this.productSubscription = this.productService.getLimitedProducts(3).subscribe(
      (productList : any) => {
        this.couraselProducts = productList["products"];
      }
    )
  }
  getRandomProduct(){
      this.productSubscription = this.productService.getProductsLimit().subscribe(
        (productList : any)=>{
          this.products = productList['products']
        }
      )
  }
  goToProductItem(id: number): void {
    this.productSubscription = this.productService.getProduct(id).subscribe(
      (product:Product)=>{
        this.route.navigateByUrl('/product/' + product.id, {
          state: { product: JSON.stringify(product) },
        });
      }
    )
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}
