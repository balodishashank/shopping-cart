import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';

// COMPONENTS
// =======================
import { HeaderComponent } from './components/header.component';
import { ProductListComponent } from './components/product-list.component';
import { CartComponent } from './components/cart.component';

// SERVICES
// =======================
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    HomeComponent,
    CheckoutComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    MyMainService,
    MySharedService
  ]
})
export class AppModule { }
