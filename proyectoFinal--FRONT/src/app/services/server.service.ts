import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {}

  // Obtener token
  

  // Login (aun no funciona)
  /*
  postLogin(data: { email: string; password: string }): Observable<any> {
    const url = "http://localhost:4500/api/users/login";
    return this.http.post(url, data).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        } else {
          console.error('No se recibió un token en la respuesta');
        }
      }),
      catchError((error) => {
        console.error('Error en el login:', error);
        return throwError(error);
      })
    );
  }
  */

  // Reigister
  postRegistro(data: { name: string; email: string; password: string }): Observable<any> {
    const url = 'http://localhost:4500/api/users/register'; 
    return this.http.post(url, data);
  }

  // Crear rutina (aun no funciona)
  /* 
  postCrearRutina(data: {day: Date; startTime: Date; endTime: Date; nameActivity: string, category: string}): Observable<any> {
    const url = 'http://localhost:4500/api/routine/'; 
    return this.http.post(url, data);
  } */
  
}
