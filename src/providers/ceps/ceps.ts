import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CepsProvider {

  private API_URL = 'https://viacep.com.br/ws/';

  constructor(public http: Http) { }

  findAddressByCep(cep: string){
    return this.http.get(this.API_URL + cep + '/json/');
  }

  // UF, Cidade e Logradouro
  findCep(logradouro: string, cidade: string, estado: string) {
    return this.http.get(this.API_URL + estado + '/' + cidade + '/' + logradouro + '/json/');
  }
}
