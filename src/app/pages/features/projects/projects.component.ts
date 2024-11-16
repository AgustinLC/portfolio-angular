import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
