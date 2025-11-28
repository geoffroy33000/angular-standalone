import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-calcul',
  imports: [],
  templateUrl: './calcul.html',
  styleUrl: './calcul.css',
})
export class CalculComponent implements OnInit {
  /*op = ""
  resultat = 0
  value1 = ""
  value2 = ""

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      switch (param.get('op')) {
        case 'plus':
          console.log('plus')
          this.resultat = Number(this.route.snapshot.queryParamMap.get('value1')) + Number(this.route.snapshot.queryParamMap.get('value2'));
          break;
        case 'moins':
          console.log('moins')

          this.resultat = Number(this.route.snapshot.queryParamMap.get('value1')) - Number(this.route.snapshot.queryParamMap.get('value2'));
          break;
        case 'fois':

          this.resultat = Number(this.route.snapshot.queryParamMap.get('value1')) * Number(this.route.snapshot.queryParamMap.get('value2'));
          break;
        case 'div':
          console.log('div')

          this.resultat = Number(this.route.snapshot.queryParamMap.get('value1')) / Number(this.route.snapshot.queryParamMap.get('value2'));
          break;

      }
    })

  }*/

  //Soluce1 prof
  op = ''
  value1 = 0
  value2 = 0
  resultat = 0
  operators: Map<string, string> = new Map([
    ['plus', '+'],
    ['moins', '-'],
    ['div', '/'],
    ['fois', '*']
  ])
  erreur: string | null = null
  operateur: string | undefined = undefined
  constructor(private route: ActivatedRoute) { }
  /*ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.op = params.get('op') ?? ''
      this.operateur = this.operators.get(this.op)
      this.route.queryParamMap.subscribe(queries => {
        this.value1 = Number(queries.get('value1'))
        this.value2 = Number(queries.get('value2'))
        if (isNaN(this.value1) || isNaN(this.value2)) {
          this.erreur = "Les deux paramètres doivent être de type numérique"
        } else if (!this.operators.has(this.op)) {
          this.erreur = "Opérateur invalid"
        }
        else {
          this.resultat = eval(`${this.value1} ${this.operateur} ${this.value2}`)
        }
      })
    })
  }*/
  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .subscribe(([params, queries]) => {
        this.op = params.get('op') ?? ''
        this.operateur = this.operators.get(this.op)
        this.value1 = Number(queries.get('value1'))
        this.value2 = Number(queries.get('value2'))
        if (isNaN(this.value1) || isNaN(this.value2)) {
          this.erreur = "Les deux paramètres doivent être de type numérique"
        } else if (!this.operators.has(this.op)) {
          this.erreur = "Opérateur invalide"
        } else {
          this.resultat = eval(`${this.value1} ${this.operateur} ${this.value2}`)
        }
      })

  }



}
