import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface SettingCategory {
  title: string;
  icon: string;
  settings: Setting[];
}

interface Setting {
  id: string;
  label: string;
  description: string;
  type: 'toggle' | 'select' | 'text' | 'number' | 'textarea';
  value: any;
  options?: { label: string; value: any }[];
}

@Component({
  selector: 'ngx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SettingsComponent {
  settingsCategories: SettingCategory[] = [
    {
      title: 'Privacidad',
      icon: 'lock-outline',
      settings: [
        {
          id: 'profile-visibility',
          label: 'Visibilidad del perfil',
          description: 'Quién puede ver tu perfil',
          type: 'select',
          value: 'public',
          options: [
            { label: 'Público', value: 'public' },
            { label: 'Solo seguidores', value: 'followers' },
            { label: 'Privado', value: 'private' },
          ],
        },
        {
          id: 'allow-tags',
          label: 'Permitir que otros me etiqueten',
          description: 'Recibir notificaciones cuando te etiqueten en publicaciones',
          type: 'toggle',
          value: true,
        },
        {
          id: 'allow-messages',
          label: 'Permitir mensajes de desconocidos',
          description: 'Recibir mensajes de usuarios que no sigues',
          type: 'toggle',
          value: false,
        },
        {
          id: 'activity-status',
          label: 'Mostrar estado de actividad',
          description: 'Mostrar cuando estás en línea',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Notificaciones',
      icon: 'bell-outline',
      settings: [
        {
          id: 'notif-likes',
          label: 'Me gusta en publicaciones',
          description: 'Recibir notificaciones cuando alguien le da me gusta a tus publicaciones',
          type: 'toggle',
          value: true,
        },
        {
          id: 'notif-comments',
          label: 'Comentarios',
          description: 'Recibir notificaciones de nuevos comentarios',
          type: 'toggle',
          value: true,
        },
        {
          id: 'notif-follows',
          label: 'Nuevos seguidores',
          description: 'Recibir notificaciones cuando alguien te sigue',
          type: 'toggle',
          value: true,
        },
        {
          id: 'notif-events',
          label: 'Eventos y clases',
          description: 'Notificaciones sobre eventos y clases a las que estás registrado',
          type: 'toggle',
          value: true,
        },
        {
          id: 'notif-email',
          label: 'Notificaciones por correo',
          description: 'Recibir notificaciones importantes por correo electrónico',
          type: 'toggle',
          value: false,
        },
      ],
    },
    {
      title: 'Cuenta',
      icon: 'person-outline',
      settings: [
        {
          id: 'username',
          label: 'Nombre de usuario',
          description: 'Tu nombre de usuario único en GROOVIA',
          type: 'text',
          value: 'groovia_pro',
        },
        {
          id: 'email',
          label: 'Correo electrónico',
          description: 'Correo asociado a tu cuenta',
          type: 'text',
          value: 'usuario@groovia.com',
        },
        {
          id: 'phone',
          label: 'Teléfono',
          description: 'Número de teléfono (opcional)',
          type: 'text',
          value: '+52 999 123 4567',
        },
        {
          id: 'language',
          label: 'Idioma',
          description: 'Idioma de la interfaz',
          type: 'select',
          value: 'es',
          options: [
            { label: 'Español', value: 'es' },
            { label: 'English', value: 'en' },
            { label: 'Português', value: 'pt' },
          ],
        },
      ],
    },
    {
      title: 'Apariencia',
      icon: 'color-palette-outline',
      settings: [
        {
          id: 'theme',
          label: 'Tema',
          description: 'Tema de la aplicación',
          type: 'select',
          value: 'dark',
          options: [
            { label: 'Groovia (Oscuro)', value: 'dark' },
            { label: 'Claro', value: 'default' },
            { label: 'Cósmico', value: 'cosmic' },
            { label: 'Corporativo', value: 'corporate' },
          ],
        },
        {
          id: 'compact-mode',
          label: 'Modo compacto',
          description: 'Mostrar más contenido en menos espacio',
          type: 'toggle',
          value: false,
        },
        {
          id: 'animations',
          label: 'Animaciones',
          description: 'Habilitar animaciones en la interfaz',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Contenido',
      icon: 'film-outline',
      settings: [
        {
          id: 'auto-play',
          label: 'Reproducción automática de videos',
          description: 'Reproducir videos automáticamente en el feed',
          type: 'toggle',
          value: false,
        },
        {
          id: 'hd-upload',
          label: 'Subir en alta calidad',
          description: 'Subir imágenes y videos en mejor calidad (consume más datos)',
          type: 'toggle',
          value: true,
        },
        {
          id: 'save-original',
          label: 'Guardar contenido original',
          description: 'Guardar una copia de tus publicaciones originales',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Clases y Academias',
      icon: 'book-outline',
      settings: [
        {
          id: 'class-reminders',
          label: 'Recordatorios de clases',
          description: 'Recibir notificaciones antes de tus clases registradas',
          type: 'toggle',
          value: true,
        },
        {
          id: 'reminder-time',
          label: 'Tiempo de recordatorio',
          description: 'Cuánto tiempo antes de la clase recibir el recordatorio',
          type: 'select',
          value: '1h',
          options: [
            { label: '15 minutos antes', value: '15m' },
            { label: '30 minutos antes', value: '30m' },
            { label: '1 hora antes', value: '1h' },
            { label: '2 horas antes', value: '2h' },
            { label: '1 día antes', value: '1d' },
          ],
        },
        {
          id: 'nearby-academies',
          label: 'Mostrar academias cercanas',
          description: 'Usar tu ubicación para encontrar academias cerca de ti',
          type: 'toggle',
          value: true,
        },
        {
          id: 'search-radius',
          label: 'Radio de búsqueda',
          description: 'Distancia máxima para buscar academias y eventos cercanos (km)',
          type: 'number',
          value: 10,
        },
        {
          id: 'show-certificates',
          label: 'Mostrar certificados en perfil',
          description: 'Exhibir certificados de clases completadas en tu perfil',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Preferencias de Baile',
      icon: 'heart-outline',
      settings: [
        {
          id: 'dance-styles',
          label: 'Estilos de baile favoritos',
          description: 'Estilos que quieres ver más en tu feed',
          type: 'select',
          value: 'all',
          options: [
            { label: 'Todos los estilos', value: 'all' },
            { label: 'Salsa y Bachata', value: 'latin' },
            { label: 'Hip Hop y Urban', value: 'urban' },
            { label: 'Ballet y Clásico', value: 'classical' },
            { label: 'Contemporáneo', value: 'contemporary' },
            { label: 'Flamenco', value: 'flamenco' },
          ],
        },
        {
          id: 'skill-level',
          label: 'Nivel de baile',
          description: 'Tu nivel actual (para recomendaciones personalizadas)',
          type: 'select',
          value: 'intermediate',
          options: [
            { label: 'Principiante', value: 'beginner' },
            { label: 'Intermedio', value: 'intermediate' },
            { label: 'Avanzado', value: 'advanced' },
            { label: 'Profesional', value: 'professional' },
          ],
        },
        {
          id: 'preferred-times',
          label: 'Horarios preferidos para clases',
          description: 'Horarios en los que prefieres tomar clases',
          type: 'select',
          value: 'evening',
          options: [
            { label: 'Mañanas', value: 'morning' },
            { label: 'Tardes', value: 'afternoon' },
            { label: 'Noches', value: 'evening' },
            { label: 'Fines de semana', value: 'weekend' },
            { label: 'Cualquier hora', value: 'any' },
          ],
        },
        {
          id: 'event-notifications',
          label: 'Notificaciones de eventos nuevos',
          description: 'Recibir alertas cuando se publiquen nuevos eventos en tu ciudad',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Feed y Descubrimiento',
      icon: 'compass-outline',
      settings: [
        {
          id: 'content-filter',
          label: 'Filtro de contenido',
          description: 'Tipo de contenido que prefieres ver en tu feed',
          type: 'select',
          value: 'following',
          options: [
            { label: 'Solo a quienes sigo', value: 'following' },
            { label: 'Recomendado para ti', value: 'recommended' },
            { label: 'Todo el contenido', value: 'all' },
          ],
        },
        {
          id: 'show-class-posts',
          label: 'Mostrar publicaciones de clases',
          description: 'Incluir promociones y anuncios de clases en el feed',
          type: 'toggle',
          value: true,
        },
        {
          id: 'show-event-posts',
          label: 'Mostrar publicaciones de eventos',
          description: 'Incluir eventos y festivales en el feed',
          type: 'toggle',
          value: true,
        },
        {
          id: 'video-quality',
          label: 'Calidad de videos en feed',
          description: 'Calidad de reproducción de videos (mayor calidad = más datos)',
          type: 'select',
          value: 'auto',
          options: [
            { label: 'Automático', value: 'auto' },
            { label: 'Alta (HD)', value: 'hd' },
            { label: 'Media', value: 'medium' },
            { label: 'Baja (ahorra datos)', value: 'low' },
          ],
        },
      ],
    },
    {
      title: 'Eventos',
      icon: 'calendar-outline',
      settings: [
        {
          id: 'event-reminders',
          label: 'Recordatorios de eventos',
          description: 'Recibir notificaciones antes de eventos registrados',
          type: 'toggle',
          value: true,
        },
        {
          id: 'event-reminder-time',
          label: 'Tiempo de recordatorio de eventos',
          description: 'Cuándo recibir recordatorios de eventos',
          type: 'select',
          value: '1d',
          options: [
            { label: '1 hora antes', value: '1h' },
            { label: '3 horas antes', value: '3h' },
            { label: '1 día antes', value: '1d' },
            { label: '3 días antes', value: '3d' },
            { label: '1 semana antes', value: '1w' },
          ],
        },
        {
          id: 'show-local-events',
          label: 'Priorizar eventos locales',
          description: 'Mostrar primero eventos en tu ciudad o cerca de ti',
          type: 'toggle',
          value: true,
        },
        {
          id: 'auto-rsvp',
          label: 'Confirmación automática',
          description: 'Confirmar asistencia automáticamente cuando te registres',
          type: 'toggle',
          value: false,
        },
      ],
    },
    {
      title: 'Seguridad',
      icon: 'shield-outline',
      settings: [
        {
          id: 'two-factor',
          label: 'Autenticación de dos factores',
          description: 'Añade una capa extra de seguridad a tu cuenta',
          type: 'toggle',
          value: false,
        },
        {
          id: 'login-alerts',
          label: 'Alertas de inicio de sesión',
          description: 'Recibir notificaciones cuando inicies sesión desde un nuevo dispositivo',
          type: 'toggle',
          value: true,
        },
        {
          id: 'session-timeout',
          label: 'Tiempo de sesión',
          description: 'Tiempo de inactividad antes de cerrar sesión automáticamente (en minutos)',
          type: 'number',
          value: 60,
        },
        {
          id: 'blocked-users',
          label: 'Usuarios bloqueados',
          description: 'Ver y gestionar usuarios bloqueados',
          type: 'select',
          value: 'manage',
          options: [
            { label: 'Gestionar bloqueados', value: 'manage' },
          ],
        },
      ],
    },
  ];

  constructor() { }

  updateSetting(categoryIndex: number, settingIndex: number, value: any) {
    this.settingsCategories[categoryIndex].settings[settingIndex].value = value;
    console.log('Configuración actualizada y guardada automáticamente:', {
      category: this.settingsCategories[categoryIndex].title,
      setting: this.settingsCategories[categoryIndex].settings[settingIndex].label,
      value: value,
    });
    // Los cambios se guardan automáticamente
    // Aquí iría la lógica para guardar en el backend de forma automática
  }

  saveAllSettings() {
    console.log('Guardando todas las configuraciones...', this.settingsCategories);
    // Aquí iría la lógica para guardar todas las configuraciones en el backend
  }
}

