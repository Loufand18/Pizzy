import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Pizza (Grand Format)',
      expanded: true,
      products: [
        { id: 0, name: 'Chevremiel', price: '5300',img:'../../assets/icon/Images/chevremiel.jpg' },
        { id: 1, name: 'Fromage', price: '5000',img:'./assets/icon/Images/fromage.jpg' },
        { id: 2, name: 'Kebab', price: '5000',img:'./assets/icon/Images/kebab.jpg' },
        { id: 3, name: 'Marherita', price: '5500',img:'/assets/icon/Images/margurita.jpg' },
        { id: 4, name: 'Taco   ', price: '5250',img:'/assets/icon/Images/taco.jpg' },
        { id: 5, name: 'Norvergienne', price: '5350',img:'/assets/icon/Images/norvergienne.jpg' },
        { id: 6, name: 'Mexicaine', price: '6500',img:'/assets/icon/Images/mexicaine.jpg' }
      ]
    },
    {
      category: 'Pizza (Moyen Format)',
      products: [
        { id: 7, name: 'Chevremiel', price: '3500',img:'../../assets/icon/Images/chevremiel.jpg'  },
        { id: 8, name: 'Fromage', price: '3400',img:'./assets/icon/Images/fromage.jpg'},
        { id: 9, name: 'Kebab', price: '3000',img:'./assets/icon/Images/kebab.jpg'  },
        { id: 10, name: 'Marherita', price: '3500',img:'/assets/icon/Images/margurita.jpg' },
        { id: 11, name: 'Taco ', price: '3250',img:'/assets/icon/Images/taco.jpg' },
        { id: 12, name: 'Norvergienne', price: '3350',img:'/assets/icon/Images/norvergienne.jpg' },
        { id: 13, name: 'Mexicaine', price: '4100',img:'/assets/icon/Images/mexicaine.jpg' }
      ]
    },
    {
      category: 'Pizza (Petit Format)',
      products: [
        { id: 14, name: 'Chevremiel', price: '2500',img:'../../assets/icon/Images/chevremiel.jpg' },
        { id: 15, name: 'Fromage', price: '2600',img:'./assets/icon/Images/fromage.jpg' },
        { id: 16, name: 'Kebab', price: '2750',img:'./assets/icon/Images/kebab.jpg'   },
        { id: 17, name: 'Marherita', price: '2900',img:'/assets/icon/Images/margurita.jpg' },
        { id: 18, name: 'Taco', price: '2850',img:'/assets/icon/Images/taco.jpg'  },
        { id: 19, name: 'Norvergienne', price: '2750',img:'/assets/icon/Images/norvergienne.jpg'  },
        { id: 20, name: 'Mexicaine', price: '3250',img:'/assets/icon/Images/mexicaine.jpg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  //supprimer produit
  delProducts(){
    for(var i=0;i<=this.cart.length;i++){
      this.cart.splice(0,this.cart.length);
    }    
  }
 
}