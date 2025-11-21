import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
})
export class ProfileDialogComponent {
  
  user = {
    name: 'Tu Nombre',
    email: 'tu@email.com',
    picture: 'https://i.pravatar.cc/150?img=12',
    bio: 'Bailarín apasionado por la salsa y bachata',
    location: 'Ciudad, País',
    phone: '+1234567890',
    website: 'www.misitio.com',
  };

  history = [
    {
      title: 'Experto en Ritmos Latinos',
      description: 'Más de 10 años enseñando salsa, bachata y kizomba en academias internacionales.',
    },
    {
      title: 'Certificado en Técnicas de Coreografía',
      description: 'Graduado del Programa Profesional de Coreografía Moderna - Academia Flow Arts (2021).',
    },
    {
      title: 'Participó en Festivales Globales',
      description: 'Invitado especial en Bachata World Congress (Madrid 2023) y Salsa Lovers Fest (CDMX 2024).',
    },
  ];

  constructor(protected ref: NbDialogRef<ProfileDialogComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit() {
    // Aquí se guardaría la información del perfil
    this.ref.close(this.user);
  }
}

