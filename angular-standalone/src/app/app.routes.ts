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
import {NotFoundComponent} from './components/not-found/not-found';
import {FormulaireSimpleComponent} from './components/formulaire-simple/formulaire-simple';

export const routes: Routes = [
  {path: 'observable', component: ObservableComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'computed', component: ComputedComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'adresse', component: AdresseComponent},
  {path: 'address', redirectTo: '/adresse'},
  {path: 'stagiaire/:nom/:prenom', component: StagiairesComponent},
  {path: 'calcul/:op', component: CalculComponent},
  {path: 'tableau/:indice', component: TableauComponent},
  {path:'formulaire', component: FormulaireSimpleComponent},
  //A PLACER EN DERNIER
  // {path: '**', component: NotFoundComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
];
