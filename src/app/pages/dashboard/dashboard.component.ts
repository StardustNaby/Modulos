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
    name: 'Tu Nombre',
    picture: 'https://i.pravatar.cc/150?img=12',
  };

  posts: Post[] = [
    {
      id: 1,
      user: {
        name: 'María García',
        picture: 'https://i.pravatar.cc/150?img=1',
        title: 'Instructora de Salsa'
      },
      content: '¡Clase de salsa este sábado! Ven a aprender los pasos básicos y diviértete bailando. Todos los niveles son bienvenidos 🕺💃',
      classInfo: {
        title: 'Clase de Salsa para Principiantes',
        description: 'Aprende los fundamentos de la salsa en un ambiente divertido y acogedor',
        date: 'Sábado 25 Nov, 6:00 PM',
        location: 'Academia de Baile Ritmo Latino'
      },
      likes: 24,
      comments: 8,
      timeAgo: 'Hace 2 horas'
    },
    {
      id: 2,
      user: {
        name: 'Academia Dance Studio',
        picture: 'https://i.pravatar.cc/150?img=2',
        title: 'Academia de Baile'
      },
      content: '¡Nuevo evento! Festival de Baile Urbano este fin de semana. No te lo pierdas 🎉',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      likes: 156,
      comments: 32,
      timeAgo: 'Hace 5 horas'
    },
    {
      id: 3,
      user: {
        name: 'Carlos Rodríguez',
        picture: 'https://i.pravatar.cc/150?img=3',
        title: 'Bailarín Profesional'
      },
      content: 'Acabo de terminar una increíble sesión de bachata. La música y el baile me llenan de energía. ¿Alguien más siente lo mismo? 💜',
      likes: 89,
      comments: 15,
      timeAgo: 'Hace 1 día'
    },
    {
      id: 4,
      user: {
        name: 'Estudio de Danza Contemporánea',
        picture: 'https://i.pravatar.cc/150?img=4',
        title: 'Academia'
      },
      content: 'Abiertas las inscripciones para nuestro curso intensivo de danza contemporánea. Clases personalizadas y grupos reducidos.',
      classInfo: {
        title: 'Curso Intensivo de Danza Contemporánea',
        description: 'Explora tu expresión artística a través del movimiento',
        date: 'Lunes a Viernes, 7:00 PM',
        location: 'Estudio de Danza Contemporánea'
      },
      likes: 67,
      comments: 12,
      timeAgo: 'Hace 2 días'
    }
  ];

  suggestions = [
    {
      name: 'Ana Martínez',
      picture: 'https://i.pravatar.cc/150?img=5',
      title: 'Instructora de Bachata'
    },
    {
      name: 'Dance Academy Pro',
      picture: 'https://i.pravatar.cc/150?img=6',
      title: 'Academia'
    },
    {
      name: 'Roberto Silva',
      picture: 'https://i.pravatar.cc/150?img=7',
      title: 'Coreógrafo'
    },
    {
      name: 'Salsa Nights',
      picture: 'https://i.pravatar.cc/150?img=8',
      title: 'Eventos'
    }
  ];

  trends = [
    { title: '#SalsaNights', count: '2.5K' },
    { title: '#BachataWeekend', count: '1.8K' },
    { title: '#DanceClass', count: '3.2K' },
    { title: '#GrooviaEvents', count: '890' }
  ];

  openCreatePost() {
    // Aquí se abriría un modal para crear publicación
    console.log('Abrir modal de crear publicación');
  }

}
