import { CommonModule } from "@angular/common";
import { Component, OnChanges, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListaComponent } from "../components/lista/lista.component";
import { ReservaComponent } from "../components/reserva/reserva.component";
import { ReservasService } from "../../services/reservas.service";

@Component({
    selector: 'app-reserva-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    imports: [CommonModule, RouterOutlet, ListaComponent , ReservaComponent, MainComponent]
  })
  export class MainComponent{
    constructor (public reservaService : ReservasService) {
    }
  }