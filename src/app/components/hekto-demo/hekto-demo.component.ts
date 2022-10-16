import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from '../../interface/cart.interface';
import { User } from '../../interface/user.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-hekto-demo',
  templateUrl: './hekto-demo.component.html',
  styleUrls: ['./hekto-demo.component.css'],
})
export class HektoDemoComponent implements OnInit, OnDestroy {
  cartSubscription!: Subscription;
  cartsTofilter!: Cart[];
  cart!: Cart;
  id!: any;
  connectedUser!: User;
  constructor(
    private activeRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id')!;
    if (window.sessionStorage && window.sessionStorage.getItem('auth-user')) {
      this.connectedUser = JSON.parse(
        window.sessionStorage.getItem('auth-user')!
      );
      this.cartSubscription = this.cartService
        .getUserCarts(this.connectedUser.id)
        .subscribe((cart: any) => {
          this.cartsTofilter = cart['carts'];
          this.cart = this.cartsTofilter.filter((ca) => ca.id == this.id)[0];
        });
    }
  }
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe;
  }
}
