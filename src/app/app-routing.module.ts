import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { GridDefaultComponent } from './components/grid-default/grid-default.component';
import { HektoDemoComponent } from './components/hekto-demo/hekto-demo.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'login',
    component: MyAccountComponent
  },
  {
    path:'hekto-demo/:id',
    component: HektoDemoComponent
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'shop-left-sider',
    component: ShopLeftSidebarComponent
  },
  {
    path: 'grid-default',
    component: GridDefaultComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'order-completed',
    component: OrderCompletedComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
