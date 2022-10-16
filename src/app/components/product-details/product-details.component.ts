import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {

  productSubscription : Subscription | undefined ;
  productServiceSubscription : Subscription | undefined ;
  product : Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  } ;
  @ViewChild('image') image: ElementRef | undefined;
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productSubscription = this.activatedRoute.paramMap.subscribe(
      (result : any) =>{
        if(window.history.state.product){
          this.product = JSON.parse(window.history.state.product)
        }else{
          this.productService.getProduct(result.params.id).subscribe(
            (product) =>{
              this.product = product;
            }
          )
        }
      }
    )
  }
  addCart(){
    var liste = []
    if(window.sessionStorage && window.sessionStorage.getItem('cart')){
      liste = JSON.parse(window.sessionStorage.getItem('cart')!)
      liste.push(this.product)
      window.sessionStorage.setItem('cart',JSON.stringify(liste))
    }else{
      liste.push(this.product)
      window.sessionStorage.setItem('cart',JSON.stringify(liste))
    }
  }
  switchImage(image: any) : void {
    this.image?.nativeElement.setAttribute('src',image)
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}
