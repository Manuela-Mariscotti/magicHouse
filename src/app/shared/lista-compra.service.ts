import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {

  // private url: string = 'https://api-magic--house.herokuapp.com';
  private url: string  = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getListaCompraByHome(id_hogar : number){
    return this.http.get(this.url+'/compra?id_hogar='+id_hogar)
  }

  postListaCompra(productname : string, id_user : number ){
    let lista_compra={
      productname : productname,
      id_user : id_user
    }
    return this.http.post(this.url+'/compra',lista_compra)
  }

  deleteByIdProduct(id_product:number){
    return this.http.delete(this.url+'/compra?id_product='+id_product)
  }
}
