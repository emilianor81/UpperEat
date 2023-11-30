import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./reservas/components/lista/lista.component";
import {ReservaComponent } from "./reservas/components/reserva/reserva.component"
import { MainComponent } from "./reservas/pages/main-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListaComponent, ReservaComponent, MainComponent]
})
export class AppComponent {
  title = 'upperEat';
}
