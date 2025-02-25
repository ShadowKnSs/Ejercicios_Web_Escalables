import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalles',
  imports: [CommonModule],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent {

  @Input() producto!: Producto;
}
