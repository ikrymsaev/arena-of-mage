import Squad from "./Squad";
import Card from "./Card";
import {TCoordinates} from "../../../common/types/Coordinates";

/** Модель игровой фишки */
class Chip {
  /** Координаты нахождения фишки на поле. */
  public coordinates: TCoordinates | null;
  public activeCard: Card;

  constructor(
    readonly chip_id: number,
    readonly number: number,
    readonly squad: Squad,
    readonly color: string
  ) {
    this.activeCard = squad.cards[0]
  }
}

export default Chip;
