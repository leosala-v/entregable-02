import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css'],
})
export class ListaDeUsuariosComponent {
  alumnos: Alumno[] = [
    { 
      nombre: 'Karen',
      apellido: 'Cavaller',
      edad: 24,
      fechaInscripcion: new Date(),
      aprobado: true,
    },
    { 
      nombre: 'Lourdes',
      apellido: 'Perez',
      edad: 24,
      fechaInscripcion: new Date(),
      aprobado: false,
    },
    { 
      nombre: 'Dolores',
      apellido: 'Rodriguez',
      edad: 24,
      fechaInscripcion: new Date(),
      aprobado: true,
    },
    { 
      nombre: 'Federico',
    apellido: 'Villa Nueva',
    edad: 24,
    fechaInscripcion: new Date(),
    aprobado: false,
  },
  { 
    nombre: 'Juan Cruz',
  apellido: 'Pacheco',
  edad: 24,
  fechaInscripcion: new Date(),
  aprobado: true,
},
  ];
}
