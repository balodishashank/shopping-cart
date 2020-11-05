import { Component, OnInit } from '@angular/core';
import { MyMainService } from '../main.service';

@Component({
  selector: 'app-home',
  template: `
    <main role="main">
      <!--<section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Product Shop</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not
            too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2 mx-2" (click)="getAllProducts($event)">View Products</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>-->

      <product-list-component [products]="products"></product-list-component>
    </main>
  `
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(
    private myMainService: MyMainService
  ) { }

  ngOnInit() {
    this.myMainService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}