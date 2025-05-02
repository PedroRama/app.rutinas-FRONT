import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private httpClient = Inject(HttpClient);

  postRegistro(data: { name: string; email: string; password: string }): Observable<any> {
    const url = "http://localhost:4500/api/users/register";
    return this.httpClient.post(url, data);
  }

  postLogin(): Observable<any> {
    const url = "http://localhost:4500/api/users/login";
    return this.httpClient.post(url, { /* Aquí tenemos que pasar los datos, nombre y correo */ });
  }
}
