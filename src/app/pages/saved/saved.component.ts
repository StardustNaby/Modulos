import { Component } from '@angular/core';

interface SavedPost {
  cover: string;
  title: string;
  creator: string;
  tag: string;
  vibes: string;
}

@Component({
  selector: 'ngx-saved-page',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent {
  collections = ['Clases favoritas', 'Eventos soñados', 'Inspiración musical'];
  selectedCollection = this.collections[0];

  savedPosts: SavedPost[] = [
    {
      cover: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80',
      title: 'House flow con DJ en vivo',
      creator: '@beatlab',
      tag: 'Evento',
      vibes: 'House · Groove',
    },
    {
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      title: 'Training heels con luces violetas',
      creator: '@violetclub',
      tag: 'Clase',
      vibes: 'Heels · Sensual',
    },
    {
      cover: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=600&q=80',
      title: 'Jam acústico + Afro beat',
      creator: '@grooviahouse',
      tag: 'Jam',
      vibes: 'Afro · Live band',
    },
  ];
}

