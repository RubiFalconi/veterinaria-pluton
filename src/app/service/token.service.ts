import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AuthenticationRequest, TokenBean } from './bean';

@Injectable({
  providedIn: 'root'
})
export class tokenService {

  private _token: string;

  public get token(): string {
    return this._token;
  }

  setToken(token : string){
    this._token = token;
  }

}
