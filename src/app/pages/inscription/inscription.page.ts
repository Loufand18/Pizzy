
import { Client } from 'src/app/pages/models/item/item.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { auth } from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  item: Client={
    nom:'',
    prenom:'',
    telephone:null,
    adresse:'',
    email:'',
    password:'',
    cpassword:'',

  }

  liste_ref: AngularFireList<any>; 
  liste_item: Observable<any []>;
   getItem(){
     return this.item;
   }
 
   onClick()
   {
     if (this.item.nom == '' && this.item.prenom == '' && this.item.telephone==null  && this.item.email=='')
      {
           alert('Vous devez necessairement remplir la formulaire');
      } 
      else {
       //enregistrement dans la base de donne
       try {
         this.db.list('Client' ).push(this.item);
        
         this.register1();
         
       } catch (error) {
         alert(error);
       }
      // this. goHome();
     }
     
   }
   constructor(private router: Router,
    public alert: AlertController,public db: AngularFireDatabase, public  afAuth: AngularFireAuth,
    public platform: Platform,
   // private angularFireStorage: AngularFireStorage

  
  ) {
  this.liste_ref = db.list('/Item');
    this.liste_item = this.liste_ref.valueChanges();
    console.log(this.liste_ref);
   }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['slide']);
  }
  async register1() {

    const { nom, prenom, telephone, email, password, cpassword } = this.item;
    if (password !== cpassword ) {
      this.showAlert('Error!', 'les deux mots de passe sont differents');
      return console.error('les deux mots de passe sont differents');
     }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.item.email , this.item.password);
      console.log(res);
    //  this.onClick();
    alert('enregistrement reussi');
      this.showAlert('Sucess!' + this.item.prenom +' '+ this.item.nom, 'Bienvenue !' );
      this.router.navigate(['/slide']);
 } catch (error) {
      console.dir(error);
      this.showAlert('Error!', 'mot de passe doit comporter au moins six caractères');

}
 
}
async register() {

  const { nom, prenom, telephone, email, password, cpassword } = this.item;
  if (password !== cpassword ) {
    this.showAlert('Error!', 'mot de passe incorrect');
    return console.error('mot de passe incorrect');
   }
  try {
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.item.email , this.item.password);
    console.log(res);
    if(res){
    this.showAlert('Sucess!' + this.item.nom, 'Bienvenue !' );
    this.router.navigate(['/slide']);
  }
} catch (error) {
    console.dir(error);
    this.showAlert('Error!', 'mot de passe doit comporter au moins six caractères');

}

}
async showAlert(header: string, message: string) {
  const alert = await this.alert.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}

}
