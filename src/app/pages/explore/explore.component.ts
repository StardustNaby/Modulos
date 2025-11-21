import { Component } from '@angular/core';

interface ExploreTag {
  label: string;
  count: string;
  emoji: string;
}

interface ExplorePost {
  image: string;
  title: string;
  location: string;
  tag: string;
}

@Component({
  selector: 'ngx-explore-page',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  tags: ExploreTag[] = [
    { label: 'Danza urbana', count: '24.1K publicaciones', emoji: '🕺' },
    { label: 'Música en vivo', count: '12.4K publicaciones', emoji: '🎶' },
    { label: 'Afro Groove', count: '6.9K publicaciones', emoji: '🔥' },
    { label: 'Ballet Fit', count: '18.2K publicaciones', emoji: '🩰' },
    { label: 'Jam Sessions', count: '9.7K publicaciones', emoji: '🎤' },
    { label: 'Kizomba Nights', count: '4.4K publicaciones', emoji: '💜' },
  ];

  posts: ExplorePost[] = [
    {
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
      title: 'Clase Heels Glow',
      location: 'Groovia Studio · CDMX',
      tag: 'Danza',
    },
    {
      image: 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&w=600&q=80',
      title: 'Live DJ Session',
      location: 'Rooftop 54 · Bogotá',
      tag: 'Música',
    },
    {
      image: 'https://images.unsplash.com/photo-1508979827776-e459534e2193?auto=format&fit=crop&w=600&q=80',
      title: 'Afro Jam',
      location: 'Lima Movement Lab',
      tag: 'Danza',
    },
    {
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
      title: 'Kizomba Mood',
      location: 'Noir Lounge · Medellín',
      tag: 'Eventos',
    },
    {
      image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=600&q=80',
      title: 'Orquesta Groove',
      location: 'Casa de la Música · Quito',
      tag: 'Música',
    },
    {
      image: 'https://images.unsplash.com/photo-1508182311256-e3f9c92a6c16?auto=format&fit=crop&w=600&q=80',
      title: 'Contemporáneo libre',
      location: 'Espacio Nébula · Buenos Aires',
      tag: 'Danza',
    },
  ];
}

