
/*
 Serviço de ofertas
*/ 

// import { URL_API } from './app.api';
// import { Http, Response } from '@angular/http'
// import { Injectable } from '@angular/core'
// import 'rxjs/add/operator/toPromise'



// import { Oferta } from './shared/oferta.model'
// import { Observable } from 'rxjs/Observable';

import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
// import 'rxjs'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/retry'

import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/toPromise'

//import { toPromise } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas'
   constructor(private http: HttpClient) { }


   public getOfertas(): Promise<Oferta[]> {
   // console.log('http://localhost:3000/ofertas')
       return this.http.get(`${URL_API}/ofertas?destaque=true`)
                    .toPromise()
                    .then((resposta: any) => resposta)
   }

   public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    //console.log('http://localhost:3000/ofertas')
       return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                    .toPromise()
                    .then((resposta: any) => resposta)
   }

   public getOfertaPorId(id: number): Promise<Oferta> {
    //console.log('http://localhost:3000/ofertas')
       return this.http.get(`${URL_API}/ofertas?id=${id}`)
                    .toPromise()
                    .then((resposta: any) => resposta[0])
                    
   }
   public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log(resposta[0].descricao)
            return resposta[0].descricao
        })

        
   }

   public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log(resposta[0].descricao)
            return resposta[0].descricao
        })
}

public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(map((resposta: any)=> resposta), retry(10))
}
   
    // public getOfertas(): Promise<Oferta[]> {
    //     //efetuar uma requisição http
    //     return this.http.get(`${URL_API}/ofertas?destaque=true`)
    //         .toPromise()
    //         .then((resposta: Response) => resposta.json())

    //     //retornar uma promise Oferta
    // }
    // public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
    //     return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    //         .toPromise()
    //         .then((resposta: Response) => resposta.json())
    // }
    // public getOfertaPorId(id: number): Promise<Oferta> {
    //     return this.http.get(`${URL_API}/ofertas?id=${id}`)
    //         .toPromise()
    //         .then((resposta: Response) => resposta.json()[0])
    // }
   

    // public getOndeFicaOfertaPorId(id: number): Promise<string> {
    //     return this.http.get(` ${URL_API}/onde-fica?id=${id} `)
    //         .toPromise()
    //         .then((resposta: Response) => {
    //             console.log(resposta.json()[0].descricao)
    //             return resposta.json()[0].descricao
    //         })
    // }

}

