import { Component } from '@angular/core';

interface RegisteredClass {
  title: string;
  studio: string;
  date: string;
  duration: string;
  certificate: boolean;
  level: string;
}

@Component({
  selector: 'ngx-classes-page',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent {
  registeredClasses: RegisteredClass[] = [
    {
      title: 'Bootcamp Heels Glow',
      studio: 'Groovia Neon House',
      date: 'Jueves 27 · 8 PM',
      duration: '2h intensivo',
      certificate: true,
      level: 'Intermedio',
    },
    {
      title: 'Afro Jam Session',
      studio: 'Movement Lab Lima',
      date: 'Viernes 28 · 7 PM',
      duration: '90 min',
      certificate: false,
      level: 'Todos los niveles',
    },
    {
      title: 'Bachata Sensual Lab',
      studio: 'Studio Vibes CDMX',
      date: 'Sábado 29 · 6 PM',
      duration: '3h full combo',
      certificate: true,
      level: 'Avanzado',
    },
  ];
}

