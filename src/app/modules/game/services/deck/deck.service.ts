import { Injectable } from '@angular/core';
import CardsMap from "./constants/cards";
import SquadsMap from "./constants/squads";
import ArmiesMap from "./constants/armies";
import Army from "../../models/Army";
import Squad from "../../models/Squad";
import Card from "../../models/Card";
import shuffle from "../../../../utils/shuffle";

@Injectable()
export class DeckService {
  readonly cards = CardsMap;
  readonly squads = SquadsMap;
  readonly armies = ArmiesMap;

  private availableCards: Set<number> = new Set(CardsMap.keys());
  private availableSquads: Set<number> = new Set(SquadsMap.keys());
  private availableArmies: Set<number> = new Set(ArmiesMap.keys());

  public getOutRandomArmy(countSquads: number): Army {
    const armyId = this.getOutRandomArmyId();

    const armySquads = shuffle<number>(this.armies.get(armyId)!.squad_ids);
    const randomSquadIds = armySquads.slice(0, countSquads);

    const randomSquads: Squad[] = [];
    randomSquadIds.forEach((id) => {
      const { name, character_ids, color } = this.squads.get(id)!;
      const cards = this.createCards(character_ids);
      randomSquads.push(new Squad(id, name, color, cards));
      this.availableSquads.delete(id);
    })

    const { name } = this.armies.get(armyId)!;

    return new Army(armyId, name, randomSquads);
  }
  private createCards(ids: number[]): Card[] {
    return ids.map((id) => {
      const { name, stats } = this.cards.get(id)!;
      this.availableCards.delete(id);

      return new Card(id, name, stats);
    });
  }

  private getOutRandomArmyId(): number {
    if (!this.availableArmies.size) {
      throw new Error('Has no available armies in deck');
    }
    const arr = [...this.availableArmies.values()];
    const random = Math.floor(Math.random() * this.availableArmies.size);
    const armyId = arr[random];
    this.availableArmies.delete(armyId);

    return armyId;
  }
}
