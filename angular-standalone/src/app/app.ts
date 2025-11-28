import {Component} from '@angular/core';
import Stagiaire from './classes/stagiaire';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from './components/menu/menu';
import {HeaderComponent} from './components/header/header';


@Component({
  selector: 'app-root', // la balise à utiliser pour ce composant
  imports: [CommonModule, RouterOutlet, MenuComponent, HeaderComponent], // CommonModule = pipes et directives de base
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {


}
