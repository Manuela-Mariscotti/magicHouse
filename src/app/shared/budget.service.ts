import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  // private url: string = 'https://api-magic--house.herokuapp.com';
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getBudgetPercent(id_hogar:number){
    return this.http.get(this.url + `/budget?id_hogar=${id_hogar}`)
  }

  postBudget(budget:number, id_hogar:number){
    return this.http.post(this.url + `/budget`, {budget: budget, id_hogar: id_hogar});
  }

}
