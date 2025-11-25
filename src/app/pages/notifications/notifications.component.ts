import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface NotificationItem {
  icon: string;
  title: string;
  description: string;
  time: string;
  type: 'follow' | 'class' | 'event';
}

@Component({
  selector: 'ngx-notifications-page',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class NotificationsComponent {
  notifications: NotificationItem[] = [
    {
      icon: 'heart-outline',
      title: 'Studio Flow te siguió',
      description: '“Nos encantó tu vibra en Groove Summit. Sigamos creando.”',
      time: 'Hace 5 min',
      type: 'follow',
    },
    {
      icon: 'calendar-outline',
      title: 'Agenda lista: Heels Glow',
      description: 'Tu clase privada del jueves fue confirmada. Sala Neon · 8 PM.',
      time: 'Hace 1 h',
      type: 'class',
    },
    {
      icon: 'music-outline',
      title: 'Nueva invitación: Jam Sessions',
      description: 'Groovia House te agregó como coach invitada para el evento del 30 Nov.',
      time: 'Hace 3 h',
      type: 'event',
    },
    {
      icon: 'award-outline',
      title: 'Destacada en Tendencias',
      description: 'Tu reel “Electric Aura” está apareciendo en #GrooviaVibes.',
      time: 'Hace 6 h',
      type: 'event',
    },
  ];
}

