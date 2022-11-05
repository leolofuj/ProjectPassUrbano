import { debounceTime, distinctUntilChanged, Observable, Subject, of, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas?: Observable<Oferta[]>

  public ofertas2?: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
     .pipe(debounceTime(1000)) //executa a ação do switchMap após 1 segundo
     .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {
        console.log('Requisição Http para api: ')
        if(termo.trim() === ''){
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      })),
      catchError ((erro) => {
        console.log(erro)
        return of([])
       })
      
      this.ofertas.subscribe((ofertas: Oferta[]) => {
        this.ofertas2 = ofertas
      })
  }

  public pesquisa(termoDaBusca: string): void{
    console.log('KeyUp caractere: ',termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
    
    
  }
  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
