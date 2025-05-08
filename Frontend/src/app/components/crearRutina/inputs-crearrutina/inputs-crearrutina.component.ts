import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-inputs-crearrutina',
  imports: [],
  templateUrl: './inputs-crearrutina.component.html',
  styleUrl: './inputs-crearrutina.component.css'
})
export class InputsCrearrutinaComponent {
  private server = inject(ServerService);

  routineData = {
    day: '',
    startTime: '',
    endTime: '',
    activity: '',
    category: ''
  };

  onChangeDay(event: Event): void {
    this.routineData.day = (event.target as HTMLInputElement).value;
  }

  onChangeStartTime(event: Event): void {
    this.routineData.startTime = (event.target as HTMLInputElement).value;
  }

  onChangeEndTime(event: Event): void {
    this.routineData.endTime = (event.target as HTMLInputElement).value;
  }

  onChangeActivity(event: Event): void {
    this.routineData.activity = (event.target as HTMLInputElement).value;
  }

  onChangeCategory(event: Event): void {
    this.routineData.category = (event.target as HTMLInputElement).value;
  }

  onCreateRoutine(): void {
    this.server.postRoutine(this.routineData).subscribe({
      next: (response) => {
        alert('¡Rutina creada exitosamente!');
      },
      error: (err) => {
        alert('Hubo un error al crear la rutina. Inténtalo de nuevo.');
      }
    });
  }
}
