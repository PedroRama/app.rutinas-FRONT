import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServerService } from '../../../services/server.service';

@Component({
  selector: 'app-boton-proxima-rutina',
  imports: [RouterLink],
  templateUrl: './boton-proxima-rutina.component.html',
  styleUrl: './boton-proxima-rutina.component.css'
})
export class BotonProximaRutinaComponent implements OnInit {
  routines: any[] = []; // Todas las rutinas del usuario
  nextRoutine: any = null; // Rutina más cercana

  constructor(private server: ServerService) {}

  ngOnInit(): void {
    this.server.getRoutines().subscribe({
      next: (data) => {
        this.routines = data;
        console.log('Rutinas obtenidas:', this.routines); // Verifica los datos aquí
      },
      error: (err) => {
        console.error('Error al obtener las rutinas:', err);
        alert('Hubo un error al obtener las rutinas. Inténtalo de nuevo.');
      }
    });
  }

  findNextRoutine(): void {
    const now = new Date(); // Fecha y hora actuales
    console.log('Fecha y hora actuales:', now);
  
    let closestRoutine = null;
    let closestTimeDifference = Infinity;
  
    this.routines.forEach(routine => {
      console.log('Rutina:', routine);
  
      // Normaliza el campo `day`
      let normalizedDay = routine.day;
  
      // Si el día es un nombre como "lunes", "martes", etc.
      if (['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'].includes(normalizedDay.toLowerCase())) {
        const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const today = new Date();
        const todayDayIndex = today.getDay(); // Índice del día actual (0 = domingo, 1 = lunes, etc.)
        const targetDayIndex = daysOfWeek.indexOf(normalizedDay.toLowerCase());
  
        // Calcula la diferencia de días
        let dayDifference = targetDayIndex - todayDayIndex;
        if (dayDifference < 0) {
          dayDifference += 7; // Si el día ya pasó, ajusta para la próxima semana
        }
  
        // Calcula la fecha del próximo día
        const targetDate = new Date();
        targetDate.setDate(today.getDate() + dayDifference);
        normalizedDay = targetDate.toISOString().split('T')[0]; // Convierte a `YYYY-MM-DD`
      }
  
      // Si el día está en formato `DD/MM/YYYY`, conviértelo a `YYYY-MM-DD`
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(normalizedDay)) {
        const [day, month, year] = normalizedDay.split('/');
        normalizedDay = `${year}-${month}-${day}`;
      }
  
      console.log('Día normalizado:', normalizedDay);
  
      // Combina el día normalizado y la hora de la rutina en un objeto Date
      const routineDate = new Date(`${normalizedDay}T${routine.startTime}`);
      console.log('Fecha y hora de la rutina:', routineDate);
  
      // Verifica si la fecha es válida
      if (isNaN(routineDate.getTime())) {
        console.error('Fecha inválida para la rutina:', routine);
        return;
      }
  
      // Calcula la diferencia de tiempo en milisegundos
      const timeDifference = routineDate.getTime() - now.getTime();
      console.log('Diferencia de tiempo (ms):', timeDifference);
  
      // Si la rutina es futura y está más cerca que la actual más cercana
      if (timeDifference > 0 && timeDifference < closestTimeDifference) {
        closestTimeDifference = timeDifference;
        closestRoutine = routine;
      }
    });
  
    if (closestRoutine) {
      this.nextRoutine = closestRoutine;
      console.log('Próxima rutina encontrada:', this.nextRoutine);
    } else {
      this.nextRoutine = null;
      console.log('No hay rutinas próximas.');
    }
  }

  //botón para cerrar el desplegable
   closeDropdown(): void {
    this.nextRoutine = null; // Oculta el contenido del desplegable
  }
}