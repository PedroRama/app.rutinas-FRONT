import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioSesionComponent } from './components/login/inicio-sesion/inicio-sesion.component';
import { PantallaRegistrarseComponent } from './components/registro/pantalla-registrarse/pantalla-registrarse.component';

export const routes: Routes = [
    
    {path: "", component: InicioSesionComponent},
    {path: "registrarse", component: PantallaRegistrarseComponent}

];
