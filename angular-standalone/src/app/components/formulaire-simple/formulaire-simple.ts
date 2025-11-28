import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Personne} from '../../models/personne';

@Component({
  selector: 'app-formulaire-simple',
  imports: [
    FormsModule,
  ],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  personne: Personne = {};
  personnes: Personne[] = [];

  afficher(form: NgForm) {
    this.personnes.push(form.value)
    form.reset()
  }
}
