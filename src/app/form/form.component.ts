import { Component, OnInit } from '@angular/core';
import {GameService} from '../service/game.service';
import {Game} from '../model/Game';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number;
  bezeichnung: string;
  genre: string;
  fsk: number;

  constructor(public service: GameService) {

  }

  ngOnInit() {
  }

  save() {
    if (this.id == null || this.bezeichnung === '' || this.genre === '' || this.fsk == null) {
      alert('Bitte geben Sie Werte ein');
    } else {
      this.service.save(this.id, this.bezeichnung, this.genre, this.fsk);
      this.id = null;
      this.bezeichnung = '';
      this.genre = '';
      this.fsk = null;
    }
  }
}
