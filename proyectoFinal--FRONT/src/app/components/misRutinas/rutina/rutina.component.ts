import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-rutina',
  imports: [],
  templateUrl: './rutina.component.html',
  styleUrl: './rutina.component.css'
})
export class RutinaComponent {
  private server = inject(ServerService);
  routines: any[] = []; // Aquí almacenaremos las rutinas obtenidas

  ngOnInit(): void {
    this.server.getRoutines().subscribe({
      next: (data) => {
        this.routines = data; // Gurdamos las rutinas en la variable
        console.log('Rutinas obtenidas:', this.routines);
      },
      error: (err) => {
        console.error('Error al obtener las rutinas:', err);
        alert('Hubo un error al obtener las rutinas. Inténtalo de nuevo.');
      }
    });
  }

  // Aquí modificamos la rutina

    onChangeDay(event: Event): void {
      this.editingRoutine.day = (event.target as HTMLInputElement).value;
    }
    
    onChangeStartTime(event: Event): void {
      this.editingRoutine.startTime = (event.target as HTMLInputElement).value;
    }
    
    onChangeEndTime(event: Event): void {
      this.editingRoutine.endTime = (event.target as HTMLInputElement).value;
    }
    
    onChangeActivity(event: Event): void {
      this.editingRoutine.activity = (event.target as HTMLInputElement).value;
    }
    
    onChangeCategory(event: Event): void {
      this.editingRoutine.category = (event.target as HTMLInputElement).value;
    }

    editingRoutine: any = null; // Rutina que se está editando

    onEditRoutine(routine: any): void {
      console.log('Rutina seleccionada para editar:', routine); // Depuración
      this.editingRoutine = { ...routine }; // Clona la rutina seleccionada
    }

    onSaveRoutine(): void {
      if (!this.editingRoutine) return;
    
      console.log('Datos enviados al backend:', this.editingRoutine); // Depuración
    
      this.server.updateRoutine(this.editingRoutine).subscribe({
        next: () => {
          alert('Rutina actualizada exitosamente.');
          this.editingRoutine = null; // Limpia la rutina en edición
          this.ngOnInit(); // Recarga las rutinas
        },
        error: (err) => {
          console.error('Error al actualizar la rutina:', err);
          alert('Hubo un error al actualizar la rutina. Inténtalo de nuevo.');
        }
      });
    }

    cancelEdit(): void {
      this.editingRoutine = null; // Cancela la edición
    }

  //

  // Aquí borramos la rutina
    onDeleteRoutine(id: string): void {
      console.log('ID recibido para borrar:', id); // Depuración
      if (confirm('¿Estás seguro de que deseas borrar esta rutina?')) {
        this.server.deleteRoutine(id).subscribe({
          next: () => {
            alert('Rutina borrada exitosamente.');
            this.routines = this.routines.filter(routine => routine._id !== id); // Actualiza la lista local
          },
          error: (err: any) => {
            console.error('Error al borrar la rutina:', err);
            alert('Hubo un error al borrar la rutina. Inténtalo de nuevo.');
          }
        });
      }
    }

}
