import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReservaInterface } from '../../../interfaces/reservas';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css',
})
export class ReservaComponent{

  @Output()
  public onNewReserva: EventEmitter<ReservaInterface> = new EventEmitter();

  public reserva: ReservaInterface = {
    id: '',
    cliente: '',
    personas: 0,
    fecha: '',
    hora: '',
    estado: ''
  };


  emitReserva() {
    console.log('FLAG - this.reserva', this.reserva )

    if( !this.reserva.cliente) return;
    this.onNewReserva.emit(this.reserva)

    this.reserva = {
      id: '',
      cliente: '',
      personas: 0,
      fecha: '',
      hora: '',
      estado: ''
    };

  }


}