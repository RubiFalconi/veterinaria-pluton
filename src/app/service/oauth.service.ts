import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AuthenticationRequest, TokenBean } from './bean';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private _servidor: string;
  private controller: string;
  
  public logeado: boolean;

  private header : HttpHeaders

  constructor(private httpClient: HttpClient) {

    this._servidor = 'http://' + window.location.hostname +':8080/pluton/api';
    
    this.controller = '/auth';
    this.logeado = false;

    this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  login(usuario: string, clave: string): Observable<any> {
    let metodo = this.servidor + this.controller + '/authenticate';

    let params : AuthenticationRequest = {
      username : usuario,
      password : clave
    } as AuthenticationRequest

    return this.httpClient.post(metodo, JSON.stringify(params), { headers: this.header });
  }

  public get servidor(): string {
    return this._servidor;
  }

  public refreshToken() {

    /*
    const source = timer(90000, 90000);
    
    const subscribe = source.subscribe(val => {
      let metodo = this.servidor + this.controller;
      metodo += '/token?grant_type=refresh_token&refresh_token=' + this.tokenBean.refresh_token;
      const body = new HttpParams();
      this.httpClient.post(metodo, body, {
        headers:
          new HttpHeaders({
            'Authorization': 'Basic ' + btoa('my-trusted-client:250123')
          }), withCredentials: true
      })
        .subscribe(
          res => {
            this.tokenBean = res as TokenBean;
            if (this.tokenBean.access_token.length === 36) {
              this.logeado = true;
            }
          }, error => {
            this.logeado = false;
          });
    });
    */
  }

}
