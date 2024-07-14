import Army from "./Army";
import Chip from "./Chip";

class Player {
  readonly chips: Map<Chip['chip_id'], Chip> = new Map();
  constructor(
    readonly id: number,
    readonly army: Army,
    readonly color: string,
  ) {
    this.initChips()
  }
  private initChips() {
    const count = this.army.squads.length;
    for (let i = 0; i < count; i++) {
      const chipId = Number(this.id.toString() + (i + 1).toString());
      const chip = new Chip(chipId, i + 1, this.army.squads[i], this.color);
      this.chips.set(i + 1, chip)
    }
  }
}

export default Player;
