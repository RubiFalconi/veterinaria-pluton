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
    private header: HttpHeaders;
    
    constructor(private httpClient: HttpClient, 
                private oauth: OauthService,
                private tokenService: tokenService) {
        
        let token = this.tokenService.token;

        this.url = this.oauth.servidor + '/cliente';
        this.header = new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        })
    }

    listAllUsuario(): Observable<any> {
        const metodo = this.url + '/1';
        return this.httpClient.get(metodo, { headers: this.header, withCredentials: true });
    }
}