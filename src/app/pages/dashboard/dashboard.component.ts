import { Component } from '@angular/core';

interface Post {
  id: number;
  user: {
    name: string;
    picture: string;
    title: string;
  };
  content: string;
  image?: string;
  classInfo?: {
    title: string;
    description: string;
    date: string;
    location: string;
  };
  likes: number;
  comments: number;
  timeAgo: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  currentUser = {
    name: 'Groovia Coach',
    picture: 'https://i.pravatar.cc/150?img=12',
  };

  posts: Post[] = [
    {
      id: 1,
      user: {
        name: 'Studio Flow',
        picture: 'https://i.pravatar.cc/150?img=1',
        title: 'Academia de Baile'
      },
      content: '¡Nueva clase de heels este viernes! Aprende los pasos básicos y diviértete con nosotras. Todos los niveles son bienvenidos.',
      classInfo: {
        title: 'Clase de Heels para Principiantes',
        description: 'Aprende los fundamentos del baile con heels en un ambiente seguro y divertido',
        date: 'Viernes 29 Nov, 7:00 PM',
        location: 'Studio Flow - CDMX'
      },
      likes: 42,
      comments: 12,
      timeAgo: 'Hace 3 horas'
    },
    {
      id: 2,
      user: {
        name: 'Groove Lab',
        picture: 'https://i.pravatar.cc/150?img=2',
        title: 'Eventos'
      },
      content: 'Este sábado tenemos nuestro festival urbano. DJ en vivo, múltiples estilos de baile y mucha energía. ¡No te lo pierdas!',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      likes: 128,
      comments: 35,
      timeAgo: 'Hace 6 horas'
    },
    {
      id: 3,
      user: {
        name: 'Alex Rivera',
        picture: 'https://i.pravatar.cc/150?img=3',
        title: 'Coach de Bachata'
      },
      content: 'Terminamos una sesión increíble de bachata moderna. La energía en el estudio fue única. Gracias a todos los que asistieron.',
      likes: 67,
      comments: 18,
      timeAgo: 'Hace 1 día'
    },
    {
      id: 4,
      user: {
        name: 'Dance Academy Pro',
        picture: 'https://i.pravatar.cc/150?img=4',
        title: 'Academia'
      },
      content: 'Abiertas las inscripciones para nuestro bootcamp intensivo de salsa. 4 semanas de entrenamiento profesional. Cupos limitados.',
      classInfo: {
        title: 'Bootcamp Intensivo de Salsa',
        description: 'Entrenamiento profesional de 4 semanas para llevar tu nivel de salsa al siguiente nivel',
        date: 'Lunes a Viernes, 7:00 PM',
        location: 'Dance Academy Pro'
      },
      likes: 89,
      comments: 24,
      timeAgo: 'Hace 2 días'
    }
  ];

  suggestions = [
    {
      name: 'Salsa Masters',
      picture: 'https://i.pravatar.cc/150?img=5',
      title: 'Instructores'
    },
    {
      name: 'Urban Dance Studio',
      picture: 'https://i.pravatar.cc/150?img=6',
      title: 'Academia'
    },
    {
      name: 'Heels Squad',
      picture: 'https://i.pravatar.cc/150?img=7',
      title: 'Grupo de Baile'
    },
    {
      name: 'Bachata Nights',
      picture: 'https://i.pravatar.cc/150?img=8',
      title: 'Eventos'
    }
  ];

  trends = [
    { title: '#HeelsClass', count: '3.2K' },
    { title: '#SalsaWeekend', count: '2.8K' },
    { title: '#UrbanDance', count: '4.1K' },
    { title: '#GrooviaEvents', count: '1.5K' }
  ];

  openCreatePost() {
    // Aquí se abriría un modal para crear publicación
    console.log('Abrir modal de crear publicación');
  }

}
