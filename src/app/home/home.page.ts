import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Aide',
      url: '/aide',
      icon: 'help-circle-outline'
    },
    {
      title: 'Deconnexion',
      icon: 'log-out',
      url: 'aceuil'
    }
    
  ];
  cart = [];
  items = [];
  img: any;
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService,
    
  ) {     
  }
  goAceuil(){
    this.router.navigate(['home']);
  }

 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  
  openCart() {
    this.router.navigate(['cart']);
  }
}