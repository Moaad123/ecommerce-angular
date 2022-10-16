import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HektoDemoComponent } from './components/hekto-demo/hekto-demo.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { ProductComponent } from './shared/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { GridDefaultComponent } from './components/grid-default/grid-default.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BarRatingModule} from 'ngx-bar-rating'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    FaqComponent,
    ProductDetailsComponent,
    HektoDemoComponent,
    MyAccountComponent,
    ShoppingCartComponent,
    OrderCompletedComponent,
    ShopLeftSidebarComponent,
    FooterComponent,
    NavbarComponent,
    HeroSectionComponent,
    ProductComponent,
    HeaderComponent,
    GridDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
