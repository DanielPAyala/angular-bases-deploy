import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: string[] = ['Carlos', 'Daniel', 'Favio', 'Raul', 'Elia'];
  deletedHero?: string;

  removeLastName(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
