import { Component } from '@angular/core';

interface CreateOption {
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'ngx-create-page',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  trendingHashtags = ['#GrooviaVibes', '#BachataLovers', '#HeelsGlow', '#StreetJazz', '#LatinoHouse', '#GrooviaEvents'];

  options: CreateOption[] = [
    { label: 'Video', icon: 'video-outline', description: 'Comparte combos o reels de tus clases.' },
    { label: 'Imagen', icon: 'image-outline', description: 'Galerías, flyers y moodboards.' },
    { label: 'Texto/Notas', icon: 'edit-2-outline', description: 'Anuncios rápidos, tips y playlists.' },
    { label: 'Mapa/Evento', icon: 'pin-outline', description: 'Ubica tu próxima clase o jam.' },
  ];

  selectedType: CreateOption = this.options[0];
  caption = '';
  location = '';
  price = '';
  showPrice = false;

  calendarWeek = [
    { day: 'Lun', date: 24, status: 'free' },
    { day: 'Mar', date: 25, status: 'busy', label: 'Groove Lab' },
    { day: 'Mié', date: 26, status: 'free' },
    { day: 'Jue', date: 27, status: 'busy', label: 'Jam Sessions' },
    { day: 'Vie', date: 28, status: 'free' },
    { day: 'Sáb', date: 29, status: 'busy', label: 'Heels Glow' },
    { day: 'Dom', date: 30, status: 'free' },
  ];
}

