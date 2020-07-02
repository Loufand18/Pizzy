import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {ActivatedRoute, Router} from '@angular/router';

import { NavController, NavParams, ToastController } from '@ionic/angular';

import { Observable } from 'rxjs';


import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Connexion } from 'src/app/pages/models/item/interface.model';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.page.html',
  styleUrls: ['./aceuil.page.scss'],
})
export class AceuilPage implements OnInit {
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

  goSlide(){
    this.router.navigate(['slide']);
  }
  goInscription(){
    this.router.navigate(['inscription']);
  }

  tableau: Connexion = {
    username: '',
    passeword: '',

  };
  username = '';
  passeword = '';
  route: any;


 liste_ref: AngularFireList<any>;
 liste_tableau: Observable<any []>;

  constructor(public navCtrl: NavController, private router: Router,
              public  afAuth: AngularFireAuth, public afDB: AngularFireDatabase 
              ,private toastController:ToastController
              
            ) {
          
                this.liste_ref = afDB.list('Connexion');
                this.liste_tableau = this.liste_ref.valueChanges();
                console.log(this.liste_ref);
              }

  ngOnInit() {
  }


 InsertData() {

  return this.liste_tableau;
 }

 onClick() {
  if (this.tableau.username === '' && this.tableau.passeword === '') {
    alert('vide');
  } else {
    try {
      this.afDB.list('Connexion').push(this.tableau);
     // alert('inscription Reusi ');
      this.login();

    } catch (error) {
      alert(error);
    }
  }
  }

  async login() {
    console.log('username' + this.tableau.username);
    console.log('password' + this.tableau.passeword);
    const { username, passeword } = this.tableau;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.tableau.username , this.tableau.passeword);
      if (res) {
       // this.route.navigate(['/user-page']);
        this.navCtrl.navigateForward('/slide');
          }
     /* else{
        this.presenterToast();
      }*/
 } catch (err) {
      console.dir(err);

}
  }
  presenterToast(){
    this.toastController.create({
      message:'Enregistrement non reussi car un des champs n\'est pas rempli ',
      duration:5000,
      color:'danger'
    }).then((toast)=> { toast.present();});
  }

}
