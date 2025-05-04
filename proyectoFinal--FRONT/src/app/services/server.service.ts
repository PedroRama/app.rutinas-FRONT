import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {}

  // Login
    postLogin(data: { email: string; password: string }): Observable<any> {
      const url = 'http://localhost:4500/api/users/login'; // Cambia la URL según tu backend
      return this.http.post(url, data).pipe(
        tap((response: any) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token); // Guarda el token en localStorage
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

  // Reigister
    postRegistro(data: { name: string; email: string; password: string }): Observable<any> {
      const url = 'http://localhost:4500/api/users/register'; 
      return this.http.post(url, data);
    }

  // Crear Rutina
  postRoutine(data: { day: string; startTime: string; endTime: string; activity: string; category: string }): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtenemos el token del localStorage
    const headers = { Authorization: `Bearer ${token}` }; // Incluimos el token en los encabezados
    const url = 'http://localhost:4500/api/routine/';
    return this.http.post(url, data, { headers });
  }

  // Ver rutinas
  getRoutines(): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No se encontró el token de autenticación');
      return throwError(() => new Error('No se encontró el token de autenticación'));
    }
  
    const headers = { Authorization: `Bearer ${token}` };
    const url = 'http://localhost:4500/api/routine/';
    return this.http.get(url, { headers });
  }

  // Borrar Rutina
  deleteRoutine(id: string): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtén el token del localStorage
    if (!token) {
      console.error('No se encontró el token de autenticación');
      return throwError(() => new Error('No se encontró el token de autenticación'));
    }
  
    const headers = { Authorization: `Bearer ${token}` }; // Incluye el token en los encabezados
    const url = `http://localhost:4500/api/routine/${id}`; // Asegúrate de que la URL sea correcta
    return this.http.delete(url, { headers });
  }

  // Modificar Rutina
  updateRoutine(data: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No se encontró el token de autenticación');
      return throwError(() => new Error('No se encontró el token de autenticación'));
    }
  
    const headers = { Authorization: `Bearer ${token}` };
    const url = `http://localhost:4500/api/routine/${data._id}`; // Usa _id para construir la URL
    return this.http.put(url, data, { headers });
  }
}
