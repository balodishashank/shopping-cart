import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';

@Component({
  selector: 'cart-component',
  template: `
    <div class="product-cart" *ngIf="cartItems && cartItems.length > 0">
      <ul>
        <li *ngFor="let item of cartItems">
          <img class="card-img-top" src="{{item.image}}" alt="Card image cap">
          {{item.name}} 
          <span>{{item.price  | currency: currencyType}}</span>
          <button type="button" class="close" aria-label="Remove Item" (click)="removeItemFromCart(item.id)">
            <span aria-hidden="true">&times;</span>
          </button>        
        </li>
      </ul>
      <div class="cart-total">
        <p><button type="button" class="btn btn-outline-primary btn-sm" (click)="emptyCart()">Empty Cart</button></p>
        <p [routerLink]="'/checkout'"><button type="button" class="btn btn-outline-primary btn-sm">Checkout</button></p>
        <p class="text-right">
          <strong class="d-block">Total:</strong>
          <span class="d-block">{{totalAmmount | currency: currencyType}}</span>
        </p>
      </div>
    </div>
  `
})
export class CartComponent implements OnInit {

  cartItems = [];
  private totalAmmount: number = 0;
  currencyType = 'INR';

  constructor(
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {

    this.mySharedService.getProducts().subscribe(data => {
      this.cartItems = data;

      this.totalAmmount = this.mySharedService.getTotalPrice();
    });

  }

  // Remove item from cart list
  removeItemFromCart(productId) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.mySharedService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }

}