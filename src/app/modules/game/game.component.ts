import {Component, OnInit} from '@angular/core';
import {GameService} from "./services/game/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
  constructor(
    readonly gameService: GameService,
  ) {}

  public ngOnInit() {
    this.gameService.init()
    console.log(this.gameService);
  }
}
