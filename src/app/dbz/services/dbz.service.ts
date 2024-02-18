import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    console.log(newCharacter);
    this.characters = [...this.characters, newCharacter];

    console.log(this.characters);
  }

  onDeleteCharacter(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
