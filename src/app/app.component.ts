import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./reservas/lista/lista.component";
import {ReservaComponent } from "./reservas/reserva/reserva.component"

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListaComponent, ReservaComponent]
})
export class AppComponent {
  title = 'upperEat';
}
