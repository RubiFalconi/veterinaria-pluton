import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tokenService } from '../service/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    token: string = ''

    constructor(private tokenService: tokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.tokenService.token;
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
