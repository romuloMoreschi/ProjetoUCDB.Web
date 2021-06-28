import { Produto } from '../models/produto';
import { HttpResponse, HttpResponseGet } from '../models/httpResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:5000/api/orders/create/', produto);
  }

  putProduto(produto: Produto) {
    return this.http.put('http://localhost:5000/api/orders/update/', produto);
  }

  deleteProduto(id: number) {
    return this.http.delete<HttpResponse>('http://localhost:5000/api/orders/remove/' + id);
  }

  getProduto(id: number) {
    return this.http.get<HttpResponseGet>('http://localhost:5000/api/orders/get/' + id);
  }

  getProdutos() {
    return this.http.get<HttpResponse>('http://localhost:5000/api/orders/get-all');
  }
}