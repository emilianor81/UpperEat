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
  public onEmitDeleteReserva: EventEmitter<string> = new EventEmitter();
  
  @Input()
  public reservasMain: ReservaInterface[] = [];

  deleteReservationEmit(idReserva:string) {
    this.onEmitDeleteReserva.emit(idReserva)  
  }
}
