import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculette',
  imports: [
    FormsModule
  ],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css',
})
export class CalculetteComponent {
  value1: number =0;
  value2: number=0;
  plus: any;
  moins: any;
  fois: any;
  div: any;
  resultat: number=0;


  afficherResultat(action: string) {
    console.log(typeof event)
    if(action === 'plus') {
      this.resultat = this.value1 + this.value2;
    }
    if(action === 'moins') {
      this.resultat = this.value1 - this.value2;
    }
    if(action === 'fois') {
      this.resultat = this.value1 * this.value2;
    }
    if(action === 'div') {
      this.resultat = this.value1 / this.value2;
    }
  }

  plusFn() {
    this.resultat = this.value1 + this.value2;
  }

  moinFn() {
    this.resultat = this.value1 - this.value2;
  }

  foisFn() {
    this.resultat = this.value1 * this.value2;
  }

  divFn() {
    this.resultat = this.value1 / this.value2;
  }
}
