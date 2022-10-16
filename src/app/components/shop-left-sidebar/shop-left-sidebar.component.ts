import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';
import {
  faCartPlus,
  faHeartCirclePlus,
  faEye,
  faList,
  faTable,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-left-sidebar',
  templateUrl: './shop-left-sidebar.component.html',
  styleUrls: ['./shop-left-sidebar.component.css'],
})
export class ShopLeftSidebarComponent implements OnInit, OnDestroy {
  addToCart = faCartPlus;
  addToWishList = faHeartCirclePlus;
  ViewDetail = faEye;
  ListView = faList;
  GridView = faTable;
  starIcon = faStar;
  products: Product[] = [];
  productSubscription: Subscription | undefined;
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  @Input() product!: Product;

  totalRecords: number | undefined;
  page: number = 1;
  perPage: number = 6;

  //list categories for checkboxes
  categories: Array<any> = [
    { name: 'Smartphones', value: 'smartphones' },
    { name: 'Laptops', value: 'laptops' },
    { name: 'Fragrances', value: 'fragrances' },
    { name: 'Skincare', value: 'skincare' },
    { name: 'Groceries', value: 'groceries' },
    { name: 'Home decoration', value: 'home-decoration' },
    { name: 'Furniture', value: 'furniture' },
    { name: 'Tops', value: 'tops' },
    { name: 'Womens dresses', value: 'womens-dresses' },
    { name: 'Womens shoes', value: 'womens-shoes' },
    { name: 'Mens shirts', value: 'mens-shirts' },
    { name: 'Mens shoes', value: 'mens-shoes' },
    { name: 'Mens watches', value: 'mens-watches' },
    { name: 'Womens watches', value: 'womens-watches' },
    { name: 'Womens bags', value: 'womens-bags' },
    { name: 'Womens jewellery', value: 'womens-jewellery' },
    { name: 'Sunglasses', value: 'sunglasses' },
    { name: 'Automotive', value: 'automotive' },
    { name: 'Motocycle', value: 'motocycle' },
    { name: 'Lighting', value: 'lighting' },
  ];
  //list of discounts
  discounts: Array<any> = [
    { name: '20% Cashback', value: 20 },
    { name: '5% Cashback offer', value: 5 },
    { name: '25% Cashback offer', value: 25 },
  ];
  //list of prices range
  priceRanges: Array<any> = [
    { name: '$0.00 - $150.00', value: [0, 150] },
    { name: '$150.00 - $350.00', value: [150, 350] },
    { name: '$350.00 - $450.00', value: [350, 450] },
    { name: '$450.00+', value: [450] },
  ];
  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {
    this.productSubscription = this.productService
      .getProductsByLimitAndByPage(this.perPage, this.page)
      .subscribe((productList: any) => {
        this.products = productList['products'];
        this.totalRecords = productList['total'];
      });
    this.productSubscription = this.productService
      .getProducts()
      .subscribe((listProducts: any) => {
        this.allProducts = listProducts['products'];
      });
  }
  addCart() {
    console.log("prodcut added to cart")
  }
  onCategorieSelected(categorie: string) {
    this.productSubscription = this.productService
      .getProductsByCategorie(categorie)
      .subscribe((productList: any) => {
        this.products = productList['products'];
      });
  }
  onChangeCategorie(event: any) {
    if (event.target.checked) {
      if (!this.filteredProducts.length) {
        this.filteredProducts = this.allProducts.filter(
          (prod) => prod.category === event.target.value
        );
      } else {
        this.filteredProducts = this.filteredProducts.filter(
          (prod) => prod.category === event.target.value
        );
      }
    }
    if (this.filteredProducts.length) {
      this.products = this.filteredProducts;
    }
  }
  onChangeDiscount(event: any) {
    if (event.target.checked) {
      if (!this.filteredProducts.length) {
        this.filteredProducts = this.allProducts.filter(
          (prod) => prod.discountPercentage >= event.target.value
        );
      } else {
        this.filteredProducts = this.filteredProducts.filter(
          (prod) => prod.discountPercentage >= event.target.value
        );
      }
    }
    if (this.filteredProducts.length) {
      this.products = this.filteredProducts;
    }
  }
  changePage(event: any) {
    this.page = event;
    this.productSubscription = this.productService
      .getProductsByLimitAndByPage(this.perPage, event)
      .subscribe((productList: any) => {
        this.products = productList['products'];
        this.totalRecords = productList['total'];
      });
  }
  onChangeRating(event: any) {
    if (event.target.checked) {
      switch (event.target.value) {
        case 1:
          if (!this.filteredProducts.length) {
            this.filteredProducts = this.allProducts.filter(
              (prod) => prod.rating >= 1 && prod.rating < 2
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.rating >= 1 && prod.rating < 2
            );
          }
          break;
        case 2:
          if (!this.filteredProducts.length) {
            this.filteredProducts = this.allProducts.filter(
              (prod) => prod.rating >= 2 && prod.rating < 3
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.rating >= 2 && prod.rating < 3
            );
          }
          break;
        case 3:
          if (!this.filteredProducts.length) {
            this.filteredProducts = this.allProducts.filter(
              (prod) => prod.rating >= 3 && prod.rating < 4
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.rating >= 3 && prod.rating < 4
            );
          }
          break;
        case 4:
          if (!this.filteredProducts.length) {
            this.filteredProducts = this.allProducts.filter(
              (prod) => prod.rating >= 4 && prod.rating < 5
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.rating >= 1 && prod.rating < 2
            );
          }
          break;
        default:
          if (!this.filteredProducts.length) {
            this.filteredProducts = this.allProducts.filter(
              (prod) => prod.rating == 5
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.rating == 5
            );
          }
      }
    }
    if (this.filteredProducts.length) {
      this.products = this.filteredProducts;
    }
  }
  calculateOrginalPrice(price: number, discount: number) {
    return (price - (price * discount) / 100).toFixed(2);
  }
  onChangePriceRange(event: any) {
    if (event.target.checked) {
      if (!this.filteredProducts.length) {
        if (event.target.value.length == 2) {
          this.filteredProducts = this.allProducts.filter(
            (prod) =>
              prod.price >= event.target.value[0] &&
              prod.price <= event.target.value[0]
          );
        } else {
          this.filteredProducts = this.allProducts.filter(
            (prod) => prod.price > event.target.value[0]
          );
        }
      } else {
        if (!this.filteredProducts.length) {
          if (event.target.value.length == 2) {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) =>
                prod.price >= event.target.value[0] &&
                prod.price <= event.target.value[0]
            );
          } else {
            this.filteredProducts = this.filteredProducts.filter(
              (prod) => prod.price > event.target.value[0]
            );
          }
        }
      }
    }
    if (this.filteredProducts.length) {
      this.products = this.filteredProducts;
    }
  }
  sortByCahnge(event: any) {
    if (event.target.value === 'price')
      this.products.sort(
        (a, b) => parseFloat(a.price + '') - parseFloat(b.price + '')
      );
    if (event.target.value === 'discount')
      this.products.sort(
        (a, b) =>
          parseFloat(a.discountPercentage + '') -
          parseFloat(b.discountPercentage + '')
      );
    if (event.target.value === 'rating')
      this.products.sort(
        (a, b) => parseFloat(a.rating + '') - parseFloat(b.rating + '')
      );
  }
  perPageChange(event: any) {
    if (event.target.value) {
      this.perPage = event.target.value;
    }
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
