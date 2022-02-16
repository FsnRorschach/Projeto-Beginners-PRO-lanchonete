import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaEnderecoService {

  constructor(private http: HttpClient) { }

  buscaCep(cep: string): Observable<Object> {
    const buscaCepAPI = `http://viacep.com.br/ws/${cep}/json`;

    return this.http.get(buscaCepAPI);
  }
}
