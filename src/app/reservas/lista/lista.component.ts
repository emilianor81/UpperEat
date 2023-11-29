import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaInterface } from '../../interfaces/reservas'

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  public name : string = 'Emiliano'
  //public reservas: [];
  // public reservas : string = 'Rodriguez';

  public reservas = [ 
    {
      id: 0,
      cliente: 'Emilianito!!!',
      numero_personas: 10,
      fecha: '2024-11-29',
      hora: '22:00'  
    },
    {
      id: 1,
      cliente: 'Emiliano2',
      numero_personas: 10,
      fecha: '2024-11-29',
      hora: '22:00'  
    },
    {
      id: 2,
      cliente: 'Emiliano3',
      numero_personas: 10,
      fecha: '2024-11-29',
      hora: '22:00'  
    },
    {
      id: 3,
      cliente: 'Emiliano4',
      numero_personas: 10,
      fecha: '2024-11-29',
      hora: '22:00'  
    }
  ]
  

  changeReservation(idReserva:number) {
    console.log('Flag- changeReservation', this.reservas[idReserva])
  }

  deleteReservation(idReserva:number) {
    console.log('Flag- deleteReservation', this.reservas[idReserva])
  }
}
