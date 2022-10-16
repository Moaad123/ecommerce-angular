import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css'],
})
export class OrderCompletedComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  continueShoppingFunction() {
    if (window.sessionStorage && window.sessionStorage.getItem('auth-token')) {
      window.sessionStorage.removeItem('cart');
      this.route.navigateByUrl('');
    } else {
      this.route.navigateByUrl('/login');
    }
  }
}
