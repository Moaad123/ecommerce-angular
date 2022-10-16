import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { Router } from '@angular/router';
import {
  faCartPlus,
  faHeartCirclePlus,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  addToCart = faCartPlus;
  addToWishList = faHeartCirclePlus;
  ViewDetail = faEye;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  roundNumber(numberOfStars: number) {
    return Math.round(numberOfStars);
  }

  //Solution 2
  roundNumberArray(numberOfStars: number) {
    let numberOfStarsRounded = Math.round(numberOfStars);
    let stars = [];
    for (let index = 0; index < numberOfStarsRounded; index++) {
      stars.push('1');
    }
    return stars;
  }
  addCart() {
    var liste = [];
    if (window.sessionStorage && window.sessionStorage.getItem('cart')) {
      liste = JSON.parse(window.sessionStorage.getItem('cart')!);
      liste.push(this.product);
      window.sessionStorage.setItem('cart', JSON.stringify(liste));
    } else {
      liste.push(this.product);
      window.sessionStorage.setItem('cart', JSON.stringify(liste));
    }
  }
  calculateOrginalPrice(price: number, discount: number) {
    return (price - (price * discount) / 100).toFixed(2);
  }
  goToProduct(): void {
    this.route.navigateByUrl('/product/' + this.product.id, {
      state: { product: JSON.stringify(this.product) },
    });
  }
}
