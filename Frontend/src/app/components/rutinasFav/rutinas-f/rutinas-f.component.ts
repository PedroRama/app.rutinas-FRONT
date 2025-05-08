import { Component, inject, OnInit } from '@angular/core';
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-rutinas-f',
  imports: [],
  templateUrl: './rutinas-f.component.html',
  styleUrl: './rutinas-f.component.css'
})
export class RutinasFComponent implements OnInit {

  private server = inject(ServerService);

  favoriteRoutines: any[] = []; // Aquí almacenaremos las rutinas favoritas

  ngOnInit(): void {
    this.server.getRoutines().subscribe({
      next: (data) => {
        // Filtrar solo las rutinas favoritas
        this.favoriteRoutines = data.filter((routine: any) => routine.isFavorite);
        console.log('Rutinas favoritas obtenidas:', this.favoriteRoutines);
      },
      error: (err) => {
        console.error('Error al obtener las rutinas favoritas:', err);
        alert('Hubo un error al obtener las rutinas favoritas. Inténtalo de nuevo.');
      }
    });
  }

  onRemoveFromFavorites(routineId: string): void {
    this.server.updateFavoriteRutine(routineId, false).subscribe({
      next: () => {
        alert('Rutina eliminada de favoritos exitosamente.');
        this.favoriteRoutines = this.favoriteRoutines.filter(routine => routine._id !== routineId);
      },
      error: (err) => {
        console.error('Error al eliminar de favoritos:', err);
        alert('Hubo un error al eliminar la rutina de favoritos. Inténtalo de nuevo.');
      }
    });
  }
}
