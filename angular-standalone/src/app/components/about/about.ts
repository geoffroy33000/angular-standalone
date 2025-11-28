import { Component } from '@angular/core';
import Stagiaire from '../../classes/stagiaire';
import {CommonModule, JsonPipe, KeyValuePipe, NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {GetCharPipe} from '../../pipes/get-char-pipe';
import {EventValuePipe} from '../../pipes/event-value-pipe';

@Component({
  selector: 'app-about',
  imports: [
    JsonPipe,
    KeyValuePipe,
    CommonModule,
    RouterLink,
    GetCharPipe,
    EventValuePipe
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

  //attributs
  title = 'angular-standalone';
  stagiaire = new Stagiaire(100, "Wick", "John")
  stagiaire2 = new Stagiaire(100, "Wick");
  numbers = [1,2,3, 4, 5];
  // numbers = [];

  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];

  moyennes: number[] = [18, 5, 11, 15]

  couleur = 'white';
  bgCouleur = 'tomato';
  firstname = "Kostas"
  lastname = "Mitroglou"
  ville = "Toulouse"
  codePostal = "31000"

  style = {
    color: 'white',
    backgroundColor: 'tomato'
  }

  isDisabled = true;

  aujourdhui = Date.now();

  constructor(private router: Router) {
  }

  //méthodes
  afficherBonjour(): string {
    return "Bonjour Angular Standalone!";
  }

  alertBonjour(): void {
    alert("Bonjour");
  }

  switchDisabled1() {
    this.isDisabled = !this.isDisabled;
  }

  afficherText(event: Event) {
    //le dernier caractère saisi
    console.log((event as InputEvent).data);

    //le contenu de l'élément html
    console.log((event.target as HTMLInputElement).value);
  }

  goToStagiaire(): void {
    //this.router.navigateByUrl('/stagiaire/Pailhe/Geoffroy');
    this.router.navigate(['/stagiaire',this.lastname, this.firstname]);
  }

  goToAdresse(): void {
    this.router.navigate(
      ['/adresse'],
      {
        queryParams: {
          cp: this.codePostal,
          ville: this.ville,
        }
      }
    );
  }

}
