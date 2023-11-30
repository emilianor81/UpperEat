import { Injectable } from '@angular/core';
import { ReservaInterface } from '../interfaces/reservas';
import {  v4 as uuid} from 'uuid'; 


@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(){
    this.getLocalStorage();
  }

  public reservas: ReservaInterface[] = [{
    id: uuid(),
    cliente: 'Emilianito!!!',
    personas: 10,
    fecha: '2024-07-10',
    hora: '22:00',
    estado: 'Pendiente',  
  },
  {
    id: uuid(),
    cliente: 'Emiliano2',
    personas: 10,
    fecha: '2023-04-10',
    hora: '22:00',
    estado: 'Pendiente'
  },
  {
    id: uuid(),
    cliente: 'Emiliano3',
    personas: 10,
    fecha: '2023-09-10',
    hora: '22:00',
    estado: 'Pendiente'
  },
 ];

  orderList(){
    this.reservas.sort(function (a, b){
      return ( a.fecha.toLowerCase().localeCompare(b.fecha.toLowerCase()))
    });
  }

  onNewReserva( reserva : ReservaInterface): void{
      const nuevaReserva : ReservaInterface = {
      id: uuid(),
      cliente: reserva.cliente,
      personas: reserva.personas,
      fecha: reserva.fecha,
      hora: reserva.hora,
      estado: reserva.estado
    } 
    this.reservas.push(nuevaReserva);
    this.orderList();
    this.saveLocalStorage();
  }

  onDeleteReserva(idReserva: string):void{
    this.reservas = this.reservas.filter( reserva => reserva.id !== idReserva)
    this.orderList();
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('reservas', JSON.stringify( this.reservas));
  }

  private getLocalStorage(): void {
    if( !localStorage.getItem('reservas') ) return
    this.reservas = JSON.parse(localStorage.getItem('reservas')!);
  }
}