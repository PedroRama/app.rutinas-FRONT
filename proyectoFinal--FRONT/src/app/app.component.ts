import { ServerService } from './services/server.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*/{
  
  /*private server = inject(ServerService);
  title = 'proyectoFinal--FRONT';

  ngOnInit(): void {
    this.server.postRegistro().subscribe(respuesta => {
      console.log("respuesta", respuesta)
    })
    
  }*/
  
}
