import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import {faList,faTable} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grid-default',
  templateUrl: './grid-default.component.html',
  styleUrls: ['./grid-default.component.css']
})
export class GridDefaultComponent implements OnInit {
  products : Product[] = []
  productSubscription : Subscription | undefined ;
  @Input() product!: Product;
  ListView = faList
  GridView = faTable
  totalRecords : number | undefined
  page : number = 1
  perPage : number = 12
  constructor(
    private productService : ProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProductsByLimitAndByPage(this.perPage,this.page).subscribe(
      (productList : any) => {
        this.products = productList["products"] ;
        this.totalRecords = productList["total"]

      }
    )
  }
  changePage(event:any){
    this.page = event
    this.productSubscription = this.productService.getProductsByLimitAndByPage(this.perPage,this.page).subscribe(
      (productList : any) => {
        this.products = productList["products"] ;
        this.totalRecords = productList["total"]
      }
    )
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
  goToProduct() : void {
    this.route.navigateByUrl('/product/'+this.product.id , {state : {product : JSON.stringify(this.product)}});
  }
}
