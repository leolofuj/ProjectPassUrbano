import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] | undefined

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // let ofertas: OfertasService = new OfertasService()
    // console.log(ofertas.getOfertas())

     this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
      .catch((param: any) => { 
      
      })

  }

}

// import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core'
// import { OfertasService } from '../ofertas.service'
// import { Oferta } from '../shared/oferta.model'
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   providers: [OfertasService] //uso dos serviços no Angular
// })
// @Injectable()
// export class HomeComponent implements OnInit {

//   public ofertas: Oferta[]
//   constructor(private ofertasService: OfertasService) { }

//   ngOnInit() {
//     // this.ofertas = this.ofertasService.getOfertas()
//     // console.log(this.ofertas)

//     this.ofertasService.getOfertas()
//       .then((ofertas: Oferta[]) => {
//         this.ofertas = ofertas
//       })
//       .catch((param: any) => { 
      
//       })


//   }

// }

