import { Injectable } from '@angular/core';
import {FieldService} from "../field/field.service";
import {DeckService} from "../deck/deck.service";
import Player from "../../models/Player";

@Injectable()
export class GameService {
  private readonly settings = { chipsCount: 6 }
  public isStarted = false;
  public player_1 : Player;
  public player_2 : Player;

  constructor(
    private fieldService: FieldService,
    private deckService: DeckService
  ) {}



  /** Initialize game. */
  public init(): void {
    if (this.isStarted) return;

    this.fieldService.generate(this.settings.chipsCount * 2, this.settings.chipsCount * 2);

    /** Set players armies. */
    this.player_1 = new Player(1, this.deckService.getOutRandomArmy(this.settings.chipsCount), "#2f00dc");
    Array.from(this.player_1.chips.values()).forEach((chip, index) => {
      this.fieldService.p1_startPoints[index].chip = chip;
    })

    this.player_2 = new Player(2, this.deckService.getOutRandomArmy(this.settings.chipsCount), "#d03c1a");
    Array.from(this.player_2.chips.values()).forEach((chip, index) => {
      this.fieldService.p2_startPoints[(this.player_2.chips.size - 1) - index].chip = chip;
    })

    this.isStarted = true;
  };
}
