import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    .spacer {
    flex: 1 1 auto;
}
`
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private cartService : CartService) { }

  public totalItem : number = 0;
  
  isHomeRoute() {
    return this.router.url === '/'
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  
}
