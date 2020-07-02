import { Component, OnInit } from '@angular/core';
import { CommandeBref } from 'src/app/pages/models/item/livraison.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { Commande } from 'src/app/pages/models/item/commande.model';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  selectedItems = [];
  total = 0;
  schel=[];
  item: Commande={
    
    telephone:null,
    date:'',
    commande:'',
    prenom:'',
    nom:'',
    adresse:'',
  }

  liste_ref: AngularFireList<any>; 
  liste_item: Observable<any []>;
   getItem(){
     return this.item;
   }
 
   onClick()
   {
    let info=[];
    for(let items of this.selectedItems)
    {
        info[info.length]=items.count+" "+items.name+" "+items.price+" FCFA ";
    }
     if (  this.item.telephone==null  )
      {
           alert('Vous devez necessairement entrer votre Numero');
      } 
      else {
       //enregistrement dans la base de donne
       var date1=new Date();
       this.item.date =date1.toString();
       this.item.commande= info.join("")+"  Tolal: "+this.total+ "FCFA";
       try {
         this.db.list('Commande' ).push(this.item);
         //alert('enregistrement reussi');
         this.presentAlert();
         this.allDelete();
         this.ScheduleNotification();
         this.allDelete();
       } catch (error) {
         alert(error);
       }
      // this. goHome();
     }
     
   }
 

  constructor(private cartService: CartService,private router: Router,public db: AngularFireDatabase , private ptl: Platform,private notif: LocalNotifications,
    private alertC: AlertController
  ) { 
    this.ptl.ready().then(() =>{
       this.notif.on('click').subscribe(res=>{
        console.log('click:',res)
        let  msg =res.data ? res.data.mydata: '';
        this.showAlert(res.title,res.text,msg);

      });
      this.notif.on('trigger').subscribe(res=>{
        console.log('trigger:',res)
        let  msg =res.data ? res.data.mydata: '';
        this.showAlert(res.title,res.text,msg); 
      });
    });
    this.liste_ref = db.list('/Item');
    this.liste_item = this.liste_ref.valueChanges();
    console.log(this.liste_ref);
  }

  async presentAlert() {
    const alert = await this.alertC.create({
      header: 'Succes',
      subHeader: 'orange',
      message: 'Vous recevrez un message de confirmation sur ce numero pour finaliser votre transaction.',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(['bienvenue']);
    location.reload();
   
  }

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
  ScheduleNotification(){
    this.notif.schedule({
     id: 1,
     title: 'Attention',
     text: 'Orange Money Notification',
     data: { mydata: 'Vous allez acheter '+ this.total +'de Pizzas.Veillez tapper #144# et entrer votre code secret pour confirmer'},
     trigger:{ in: 5, unit: ELocalNotificationTriggerUnit.SECOND}
    });
  }
  recurrinNotification(){
    this.notif.schedule({
      id: 22 ,
      title: 'Attention',
      text: 'Orange Money Notification',
      trigger:{ every: ELocalNotificationTriggerUnit.MINUTE}
     });

  }
  repetingDaling(){
    this.notif.schedule({
      id: 42 ,
      title: 'Good',
      text: 'Orange Money Notification',
      trigger:{ every: {hour: 16 ,minute: 20}}
     });

  }
 getAll(){
   this.notif.getAll().then(res=>{
     this.schel=res;
   });
 }
  showAlert(header, sub, mesg) {
    this.alertC.create({
    header: header,
    subHeader: sub,
    message: mesg,
    buttons: ['OK']
  }).then(alert =>alert.present());
  
}

  laDate()
  {
    alert(new Date());
  }
  allDelete(){

    this.cartService.delProducts();
  }


}
