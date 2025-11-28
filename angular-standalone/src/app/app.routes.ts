import {Routes} from '@angular/router';
import {AppComponent} from './app';
import {ObservableComponent} from './components/observable/observable';
import {SubjectComponent} from './components/subject/subject';
import {ComputedComponent} from './components/computed/computed';
import {HomeComponent} from './components/home/home';
import {AboutComponent} from './components/about/about';
import {AdresseComponent} from './components/adresse/adresse';
import {StagiairesComponent} from './components/stagiaires/stagiaires';
import {CalculComponent} from './components/calcul/calcul';
import {TableauComponent} from './components/tableau/tableau';

export const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'computed', component: ComputedComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'adresse', component: AdresseComponent},
  {path: 'stagiaire/:nom/:prenom', component: StagiairesComponent},
  {path: 'calcul/:op', component: CalculComponent},
  {path: 'tableau/:indice', component: TableauComponent},
];
