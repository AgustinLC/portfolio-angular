import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string = 'Titulo';
  @Input() description: string = 'Descripción';
  @Input() image: string = 'Imagen';
  @Input() link: string = 'Enlace';
  @Input() button: string = 'Boton';

  isExpanded: boolean = false;
  shortDescription: string = '';

  ngOnInit(): void {
    // Generar resumen inicial de la descripción
    this.shortDescription = this.description.slice(0, 100) + '...';
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
