import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  characterList: Character[] = [];

  @Output()
  onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(indice: number): void {
    this.onDeleteId.emit(indice);
  }
}
