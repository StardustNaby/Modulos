import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
  registered: boolean;
}

@Component({
  selector: 'ngx-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class EventosComponent {
  showCalendar = false;
  selectedDate = new Date();

  upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Festival de Baile Urbano',
      description: 'El evento más grande de danza urbana del año. Competencias, workshops y shows en vivo.',
      date: '2024-12-15',
      time: '18:00 - 23:00',
      location: 'Auditorio Nacional, CDMX',
      image: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      type: 'Festival',
      registered: true,
    },
    {
      id: 2,
      title: 'Noche de Salsa y Bachata',
      description: 'Ven a bailar y aprender con los mejores instructores. Incluye clase y práctica social.',
      date: '2024-12-20',
      time: '20:00 - 02:00',
      location: 'Salón Ritmo Latino, Guadalajara',
      image: 'https://images.unsplash.com/photo-1508700929628-6665f2947721?auto=format&fit=crop&w=400&q=80',
      type: 'Social',
      registered: true,
    },
    {
      id: 3,
      title: 'Taller de Flamenco',
      description: 'Taller intensivo de flamenco con maestros internacionales. Para todos los niveles.',
      date: '2024-12-28',
      time: '10:00 - 14:00',
      location: 'Academia Flamenco Español, Mérida',
      image: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      type: 'Taller',
      registered: true,
    },
    {
      id: 4,
      title: 'Competencia de Hip Hop',
      description: 'Batalla de crews y solistas. Premios en efectivo y oportunidades para bailarines.',
      date: '2025-01-05',
      time: '16:00 - 22:00',
      location: 'Plaza de la Danza, Monterrey',
      image: 'https://images.unsplash.com/photo-1508700929628-6665f2947721?auto=format&fit=crop&w=400&q=80',
      type: 'Competencia',
      registered: true,
    },
    {
      id: 5,
      title: 'Masterclass de Ballet',
      description: 'Clase magistral con bailarín principal del Ballet Nacional. Técnica y variaciones.',
      date: '2025-01-12',
      time: '11:00 - 13:00',
      location: 'Teatro de las Artes, Puebla',
      image: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      type: 'Masterclass',
      registered: true,
    },
  ];

  constructor(protected dateService: NbDateService<Date>) { }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  onDateSelect(date: Date) {
    this.selectedDate = date;
    // Aquí podrías filtrar eventos por fecha si es necesario
    console.log('Fecha seleccionada:', date);
  }
}

