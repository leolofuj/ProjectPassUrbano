
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model'
//import 'rxjs/Rx'

import { CarrinhoService} from '../carrinho.service'



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  //private route!: ActivatedRoute

 

  public oferta!: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros['id'] )
       .then((oferta: Oferta) => {
         this.oferta = oferta
        
       })
      
    })
  }
  ngOnDestroy() {
   
  }
  public adicionarItemCarrinho( ): void {
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())
    
  }

}
