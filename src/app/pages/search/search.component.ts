import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface TrendingPost {
  user: string;
  handle: string;
  description: string;
  cover: string;
  likes: string;
  comments: string;
  tag: string;
}

@Component({
  selector: 'ngx-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.search-container', [
          style({ opacity: 0, transform: 'scale(0.9)' }),
          animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
        ], { optional: true }),
        query('.trending-post', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true }),
        query('.trend-card', [
          style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
          stagger(80, animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' })))
        ], { optional: true }),
      ])
    ])
  ]
})
export class SearchComponent {
  query = '';
  isSearching = false;
  searchFocused = false;

  trendingPosts: TrendingPost[] = [
    {
      user: 'Studio Vibes',
      handle: '@studiovibes',
      description: 'Groove Lab · Clases urban style con DJ en vivo · 8 PM',
      cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      likes: '3.4K',
      comments: '146',
      tag: 'Eventos',
    },
    {
      user: 'Heels & Soul',
      handle: '@heelsoul',
      description: 'Bootcamp “Glow” · 4 sesiones intensivas · Inscripciones abiertas',
      cover: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      likes: '2.1K',
      comments: '89',
      tag: 'Clases',
    },
    {
      user: 'Groovia Pro Team',
      handle: '@groovia_pro',
      description: 'Showcase “Electric Aura” · Teatro Central · 25 Nov',
      cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      likes: '4.8K',
      comments: '210',
      tag: 'Participó',
    },
  ];

  startSearch() {
    if (!this.query.trim()) {
      return;
    }
    this.isSearching = true;
    setTimeout(() => {
      this.isSearching = false;
      this.searchFocused = false;
    }, 1800);
  }

  onFocus() {
    this.searchFocused = true;
  }

  onBlur() {
    if (!this.query.trim()) {
      this.searchFocused = false;
    }
  }
}

