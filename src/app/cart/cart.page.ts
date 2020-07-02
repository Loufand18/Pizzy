import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { extend } from 'webdriver-js-extender';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  selectedItems = [];
  total = 0;
  i=0;
  donne=[];
  

 
  constructor(private cartService: CartService,private router: Router,public loadingController: LoadingController,public alertController: AlertController) { }
 
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }



  //Methode du boutton annuler
  async go() {
    const alert = await this.alertController.create({
      header: 'Votre demande à été annuler',
    });
    this.allDelete();
    await alert.present();
    await alert.present();
    this.router.navigate(['home']);
   
  }
  
  //Methode du boutton valider

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'En cours de validation...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.RecupAchats()
  //  this.allDelete();
    this.router.navigate(['validation']);
  }



//Methode Supprimer
  allDelete(){

      this.cartService.delProducts();
    }

//Methode recuperation Achats
RecupAchats()
{
  let info=[];
  for(let items of this.selectedItems)
  {
      info[info.length]=items.count+" "+items.name+" "+items.price+" FCFA \n";
  }
  alert(info.join("")+"\n Tolal: "+this.total+ "FCFA");
}
  goTA()
  {
    this.router.navigate(['type-achat']);
  }
 
}