import { Component } from '@angular/core';

interface ProfileStat {
  label: string;
  value: string;
}

interface ProfileHighlight {
  label: string;
  color: string;
  icon: string;
}

interface ProfileHistory {
  title: string;
  description: string;
  tag: string;
}

interface ProfilePost {
  image: string;
  title: string;
  meta: string;
}

@Component({
  selector: 'ngx-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user = {
    name: 'Groovia Coach',
    username: 'groovia_pro',
    badge: 'Coach',
    location: 'Ciudad, País',
    bio: '“Inspirando comunidades de baile con cada coreografía 💫”',
    contact: '@groovia',
    academy: 'Groovia Dance Studio',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    cover:
      'linear-gradient(135deg, rgba(90,16,130,0.85), rgba(17,24,39,0.95)), url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80)',
  };

  stats: ProfileStat[] = [
    { label: 'Publicaciones', value: '42' },
    { label: 'Seguidores', value: '6,2K' },
    { label: 'Siguiendo', value: '812' },
    { label: 'Clases dictadas', value: '128' },
  ];

  highlights: ProfileHighlight[] = [
    { label: 'Eventos', color: '#f472b6', icon: 'flash-outline' },
    { label: 'Clases', color: '#a855f7', icon: 'book-open-outline' },
    { label: 'Certs.', color: '#38bdf8', icon: 'award-outline' },
    { label: 'Backstage', color: '#c084fc', icon: 'film-outline' },
  ];

  history: ProfileHistory[] = [
    {
      title: 'Experta en ritmos urbanos y latinos',
      description: '12 años enseñando salsa, bachata y heels en academias top de México.',
      tag: 'experta',
    },
    {
      title: 'Certificada por Urban Dance Factory',
      description: 'Programa profesional en NYC (2023) enfocado en coreografía comercial.',
      tag: 'certificada',
    },
    {
      title: 'Participó en Groove Summit Europe',
      description: 'Invitada como coach y performer en Barcelona 2024.',
      tag: 'participó',
    },
  ];

  posts: ProfilePost[] = [
    {
      image: 'https://images.unsplash.com/photo-1515165562835-c4c1bfa1f254?auto=format&fit=crop&w=600&q=80',
      title: 'Sunset heels class',
      meta: '2,1K likes · 98 comentarios',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
      title: 'Backstage vibes',
      meta: '1,7K likes · 65 comentarios',
    },
    {
      image: 'https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?auto=format&fit=crop&w=600&q=80',
      title: 'Groovia showcase',
      meta: '3,4K likes · 120 comentarios',
    },
    {
      image: 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&w=600&q=80',
      title: 'Studio night',
      meta: '980 likes · 34 comentarios',
    },
    {
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      title: 'Clases privadas',
      meta: '1,2K likes · 45 comentarios',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
      title: 'Nueva coreografía',
      meta: '2,9K likes · 150 comentarios',
    },
  ];
}

