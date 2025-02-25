import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCardComponent } from "./components/producto-card/producto-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_2';
}
