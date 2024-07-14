import { Component } from '@angular/core';
import Card from "../../models/Card";
import Squad from "../../models/Squad";
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {

  constructor(
    readonly gameService: GameService
  ) {}

  get playerCards(): { card: Card, color: Squad['color'] }[] {
    return Array.from(
      this.gameService.player_1.chips.values(),
      (value) => ({ card: value.activeCard, color: value.squad.color })
    );
  }
  get enemyCards(): { card: Card, color: Squad['color'] }[] {
    return Array.from(
      this.gameService.player_2.chips.values(),
      (value) => ({ card: value.activeCard, color: value.squad.color })
    );
  }
}
