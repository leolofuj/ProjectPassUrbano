import { URL_API } from './app.api';
//import { RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { Response } from '@angular/http';



@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}
    
      public efetivarCompra(pedido: Pedido): Observable<any>{
        
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-type', 'application/json');
 
        return this.http.post<any>(
            `${URL_API}/pedidos`,
             (pedido),
             ({headers: headers})
        )
        .pipe(map((resposta: any) => resposta['id']));
    }
    
}