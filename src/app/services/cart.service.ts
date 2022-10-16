import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }
  getUserCarts(userId : number){
    return this.http.get(`https://dummyjson.com/carts/user/${userId}`)
  }
  getCartById(id: string){
    return this.http.get(`https://dummyjson.com/carts/user/${id}`)
  }
}
