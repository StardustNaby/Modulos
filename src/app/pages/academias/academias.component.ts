import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Academy {
  id: number;
  name: string;
  picture: string;
  location: string;
  rating: number;
  students: string;
  description: string;
  specialties: string[];
  registeredSince: string;
}

@Component({
  selector: 'ngx-academias',
  templateUrl: './academias.component.html',
  styleUrls: ['./academias.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AcademiasComponent {
  academias: Academy[] = [
    {
      id: 1,
      name: 'Ritmo Latino Dance Academy',
      picture: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      location: 'Ciudad de México',
      rating: 4.8,
      students: '2.5K',
      description: 'Academia especializada en ritmos latinos. Clases de salsa, bachata y merengue para todos los niveles.',
      specialties: ['Salsa', 'Bachata', 'Merengue'],
      registeredSince: 'Registrado desde: Enero 2024',
    },
    {
      id: 2,
      name: 'Street Dance Pro',
      picture: 'https://images.unsplash.com/photo-1508700929628-6665f2947721?auto=format&fit=crop&w=400&q=80',
      location: 'Guadalajara',
      rating: 4.9,
      students: '1.8K',
      description: 'El mejor lugar para aprender hip hop, breakdance y danza urbana. Instructores profesionales certificados.',
      specialties: ['Hip Hop', 'Breakdance', 'Urban Dance'],
      registeredSince: 'Registrado desde: Marzo 2024',
    },
    {
      id: 3,
      name: 'Ballet Clásico Elite',
      picture: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      location: 'Monterrey',
      rating: 4.7,
      students: '950',
      description: 'Academia de ballet clásico con tradición de más de 20 años. Formación profesional en danza clásica.',
      specialties: ['Ballet Clásico', 'Punta', 'Variaciones'],
      registeredSince: 'Registrado desde: Febrero 2024',
    },
    {
      id: 4,
      name: 'Flamenco y Danza Española',
      picture: 'https://images.unsplash.com/photo-1508700929628-6665f2947721?auto=format&fit=crop&w=400&q=80',
      location: 'Mérida',
      rating: 4.6,
      students: '680',
      description: 'Única academia especializada en flamenco en la región. Aprende la pasión y técnica del baile español.',
      specialties: ['Flamenco', 'Sevillanas', 'Danza Española'],
      registeredSince: 'Registrado desde: Enero 2024',
    },
    {
      id: 5,
      name: 'Dance Fusion Studio',
      picture: 'https://images.unsplash.com/photo-1517344360277-936f939388b2?auto=format&fit=crop&w=400&q=80',
      location: 'Puebla',
      rating: 4.8,
      students: '1.2K',
      description: 'Estudio moderno que combina diferentes estilos de baile. Jazz, contemporáneo y danza moderna.',
      specialties: ['Jazz', 'Contemporáneo', 'Moderno'],
      registeredSince: 'Registrado desde: Abril 2024',
    },
  ];

  constructor() { }
}

