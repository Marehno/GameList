import { Injectable } from '@angular/core';
import {Game} from '../model/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public array: Game[] = [];

  constructor() {
    this.array.push(new Game(1, 'sd', 'asdd', 12));
    this.array.push(new Game(2, 'sad', 'asasdadd', 12));
    this.array.push(new Game(3 , 'World of Warcraft - Classic', 'MMORPG', 16));
  }

  get spiele() {
    return this.array;
  }

  save(id: number, bezeichnung: string, genre: string, fsk: number) {
    this.array.push(new Game(id, bezeichnung, genre, fsk));
  }
  delete(id: Game) {
    return this.array = this.array.filter(g => g !== id);
  }
}
