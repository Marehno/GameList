import { Component, OnInit } from '@angular/core';
import {Game} from '../model/Game';
import {GameService} from '../service/game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: GameService) {
  }

  ngOnInit() {
  }

  get spiele() {
    return this.service.spiele;
  }

  delete(idFromGame: Game) {
    return this.service.delete(idFromGame);
  }
  alert(bezeichnungFromGame: Game) {
    alert('Sie haben ' + bezeichnungFromGame.bezeichnung + ' ausgewählt');
  }
}
