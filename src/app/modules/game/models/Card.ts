import {TStats} from "../services/deck/types/types";
import Squad from "./Squad";
/** Модель карточки. */
class Card {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly stats: TStats
  ) {}
}

export default Card;
