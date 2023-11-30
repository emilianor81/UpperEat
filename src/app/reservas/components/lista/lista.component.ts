import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaInterface } from '../../../interfaces/reservas'

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

  @Output()
  public onEmitDeleteReserva: EventEmitter<number> = new EventEmitter();
  
  @Input()
  public reservasMain: ReservaInterface[] = [];

  //TO DO: ORDER THIS LIST FOR DATA AND HOUR 
  //TO DO CHANGE RESERVATION STATUS 

  changeReservation(idReserva:number) {
    //TODO IMPLEMENT THIS METHOD
    console.log('Flag- changeReservation', this.reservasMain[0])
  }

  deleteReservationEmit(idReserva:number) {
    console.log('Flag- deleteReservation', idReserva)
    this.onEmitDeleteReserva.emit(idReserva)  
  }
}
