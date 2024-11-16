import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
