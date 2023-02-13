export interface TokenBean {
    tipo: string;
    token: string;
    expires_in: number;
    expiraEn: number;
    access_token: string;
    expiro: boolean;
    scope: string;
    refresh_token: string;
    token_type: string;
}

export interface AuthenticationRequest {
    username : string;
    password : string;
}