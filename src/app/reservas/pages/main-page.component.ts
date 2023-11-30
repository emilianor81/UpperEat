import { CommonModule } from "@angular/common";
import { Component, OnChanges, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListaComponent } from "../components/lista/lista.component";
import { ReservaComponent } from "../components/reserva/reserva.component";
import { ReservaInterface } from "../../interfaces/reservas";

@Component({
    selector: 'app-reserva-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    imports: [CommonModule, RouterOutlet, ListaComponent , ReservaComponent, MainComponent]
  })
  export class MainComponent implements OnChanges{

    public reservas: ReservaInterface[] = [{
      cliente: 'Emilianito!!!',
      personas: 10,
      fecha: '2024-07-10',
      hora: '22:00',
      estado: 'Pendiente',  
    },
    {
      cliente: 'Emiliano2',
      personas: 10,
      fecha: '2023-04-10',
      hora: '22:00',
      estado: 'Pendiente'
    },
    {
      cliente: 'Emiliano3',
      personas: 10,
      fecha: '2023-09-10',
      hora: '22:00',
      estado: 'Pendiente'
    },
    {
      cliente: 'Emiliano4',
      personas: 10,
      fecha: '2024-07-22',
      hora: '22:00',
      estado: 'Pendiente'
    }];

    ngOnChanges(): void {
      //TODO FIX THIS METHOD, ISN'T ORDERNING OK
      if(this.reservas){
        this.reservas = this.reservas.sort(function (a :ReservaInterface, b: ReservaInterface){
          return a.fecha.localeCompare(b.fecha, 'en', { numeric: true })
        });
      }
    }

    onNewReserva( reserva : ReservaInterface): void{
      this.reservas.push(reserva);
    }

    onDeleteReserva(idReserva: number):void{
      this.reservas.splice( idReserva, 1)
    }
  }