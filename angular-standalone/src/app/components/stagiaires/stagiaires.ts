import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stagiaires',
  imports: [],
  templateUrl: './stagiaires.html',
  styleUrl: './stagiaires.css',
})
export class StagiairesComponent implements OnInit {
  nom=""
  prenom=""

  constructor(private route: ActivatedRoute) {
  }
  //Asynchrone
  /*ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nom = params.get('nom') ?? ''
      this.prenom = params.get('prenom') ?? ''

    })
  }*/

  //synchrone
  ngOnInit() {
    this.nom = this.route.snapshot.paramMap.get('nom') ?? ''
    this.prenom = this.route.snapshot.paramMap.get('prenom') ?? ''
  }
}
