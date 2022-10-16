import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('https://dummyjson.com/products/' + id);
  }
  getProductsLimit(): Observable<Product[]> {
    const skip = Math.floor(Math.random() * 100);
    return this.httpClient.get<Product[]>(
      `https://dummyjson.com/products?limit=6&skip=${skip}`
    );
  }
  getProductsByLimitAndByPage(
    limit: number,
    page: number
  ): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://dummyjson.com/products?limit=${limit}&skip=${page}`
    );
  }
  getProductsByCategorie(categorie: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://dummyjson.com/products/category/${categorie}`
    );
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://dummyjson.com/products`);
  }
  getLimitedProducts(limit: number): Observable<Product[]> {
    const skip = Math.floor(Math.random() * 100);
    return this.httpClient.get<Product[]>(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
  }
}
