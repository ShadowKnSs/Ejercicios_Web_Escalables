import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoDetallesComponent } from "../producto-detalles/producto-detalles.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css',
  imports: [CommonModule,ProductoDetallesComponent]
})
export class ProductoCardComponent {

  productos : Producto [] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true,  onSale: false, imageUrl: 'https://m.media-amazon.com/images/I/717njqTYEJL._AC_UF894,1000_QL80_.jpg' },
    { id: 2, name: 'Smartphone', price: 800,  inStock: true,  onSale: true,  imageUrl: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972/195949046995_1.jpg?v=638388006648230000' },
    { id: 3, name: 'Tablet', price: 400,  inStock: false, onSale: false, imageUrl: 'https://m.media-amazon.com/images/I/71KNiKiMbiL._AC_UF894,1000_QL80_.jpg' },
    { id: 4, name: 'Monitor', price: 200,  inStock: true,  onSale: true,  imageUrl: 'https://m.media-amazon.com/images/I/71f+BUqVXOL.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true,  onSale: false, imageUrl: 'data:image/jpeg;base64,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' },
    { id: 6, name: 'Mouse inalámbrico', price: 50,  inStock: false, onSale: false, imageUrl: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22684fa72/mouse-inalambrico-usb-usb-c-con-bateria-recargable-800-1000-1200-1600-dpi.jpg' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true,  onSale: true,  imageUrl: 'data:image/jpeg;base64,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' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true,  onSale: false, imageUrl: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true,  imageUrl: 'https://m.media-amazon.com/images/I/61Ii23HTtNL.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true,  onSale: false, imageUrl: 'https://www.radioshack.com.mx/store/medias/80936.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mjc0MzgzfGltYWdlL2pwZWd8YUdOa0wyaGlaQzg1TURrMk1URTVORFV4TmpjNEx6Z3dPVE0yTG1wd1oxOHhNakF3Wm5SM3wzMjg2MWY1MmU4N2IzMWMyNjhlNmVhYzZkOTA0MTg5N2IyNWQxMjJhNDU3OTdlM2M3ODJjZTUzMThmMGJlNzRh' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true,  onSale: true,  imageUrl: 'https://cdn1.coppel.com/images/catalog/mkp/4072/3000/40721231-1.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90,  inStock: true,  onSale: false, imageUrl: 'https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true,  imageUrl: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/230659bc1/router-wi-fi-4g-ac1200-2-4-ghz-y-5-ghz-hasta-35-m-de-cobertura.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true,  onSale: false, imageUrl: 'https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true,  onSale: true,  imageUrl: 'https://cdn1.coppel.com/images/catalog/mkp/7463/9000/74637616-1.jpg' }
  ];

  productoSeleccionado: Producto | null = null;

  seleccionarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
  }
}
