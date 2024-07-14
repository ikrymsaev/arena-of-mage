import Card from "./Card";


class Squad {
  constructor(
    readonly id: number,
    readonly name: string,
    public color: string,
    readonly cards: Card[]
  ) {}
}

export default Squad;
