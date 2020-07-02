import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  livraison()
  {
      this.router.navigateByUrl('/local');
  }
  com()
  {
      this.router.navigate(['pay']);
  }
}
