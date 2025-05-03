import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioSesionComponent } from './components/login/inicio-sesion/inicio-sesion.component';
import { PantallaRegistrarseComponent } from './components/registro/pantalla-registrarse/pantalla-registrarse.component';
import { InicioComponent } from './components/incio/inicio/inicio.component';
import { MisRutinasComponent } from './components/misRutinas/mis-rutinas/mis-rutinas.component';
import { RutinasFavComponent } from './components/rutinasFav/rutinas-fav/rutinas-fav.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { CrearrutinaComponent } from './components/crearRutina/crearrutina/crearrutina.component';

export const routes: Routes = [
    
    {path: "", component: InicioSesionComponent},
    {path: "registrarse", component: PantallaRegistrarseComponent},
    {path: "inicio", component: InicioComponent},
    {path: "misrutinas", component: MisRutinasComponent},
    {path: "rutinasfavoritas", component: RutinasFavComponent},
    {path: "usuario", component: UsuarioComponent},
    {path: "crearutina", component: CrearrutinaComponent},

];
