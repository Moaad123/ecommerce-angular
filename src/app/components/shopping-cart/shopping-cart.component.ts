import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from '../../interface/cart.interface';
import { User } from '../../interface/user.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  userCarts: Cart[] = [];
  cartSubscription!: Subscription;
  connectedUser!: User;
  totalRecords: number | undefined;
  page: number = 1;
  perPage: number = 1;
  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.connectedUser = JSON.parse(
      window.sessionStorage.getItem('auth-user')!
    );
    this.cartSubscription = this.cartService
      .getUserCarts(this.connectedUser.id)
      .subscribe((CartList: any) => {
        this.userCarts = CartList['carts'];
        this.totalRecords = CartList['total'];
      });
  }
  changePageEventFunction(event: any) {
    this.page = event.target.value;
  }
  clearCart(number: number) {
    this.userCarts = this.userCarts.filter((c) => {
      c.id !== number;
    });
  }
  proceedToCheckoutHandle(id: number) {
    this.route.navigateByUrl(`/hekto-demo/${id}`);
  }
}
