import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log(character);
    this.characters = [...this.characters, character];
  }

  onDeleteCharacter(id: number) {
    console.log(id);
    this.characters.splice(id, 1);
  }
}
