import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OauthService } from '../oauth.service';
import { tokenService } from '../token.service';
@Injectable({
    providedIn: 'root'
})
export class UsuarioControllerNg {
    private url: string;
    private headers: HttpHeaders;
    
    constructor(private httpClient: HttpClient, 
                private oauth: OauthService,
                private tokenService: tokenService) {
        
        this.url = this.oauth.servidor + '/cliente';
        this.headers = new HttpHeaders({
            /*'Authorization': 'Bearer ' + this.tokenService.token,*/
            'Content-Type': 'application/json'
        });
    }

    listAllUsuario(): Observable<any> {
        const metodo = this.url + '/1';
        return this.httpClient.get(metodo, {headers: this.headers, withCredentials: true});
    }
}