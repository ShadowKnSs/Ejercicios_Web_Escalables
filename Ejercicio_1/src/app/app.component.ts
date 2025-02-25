import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './Components/header-component/header-component.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';  
import { ContentComponentComponent } from './Components/content-component/content-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent, ContentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio_1';
}
