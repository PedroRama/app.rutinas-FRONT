import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {}

  postRegistro(data: { name: string; email: string; password: string }): Observable<any> {
    const url = 'http://localhost:4500/api/users/register'; 
    return this.http.post(url, data);
  }

  postLogin(): Observable<any> {
    const url = "http://localhost:4500/api/users/login";
    return this.http.post(url, { /* Aquí tenemos que pasar los datos, nombre y correo */ });
  }
}
