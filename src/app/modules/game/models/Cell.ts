import Chip from "./Chip";

export type TLandscape = 'plain' | 'jungle' | 'mountain' | 'lake' | 'swamp';
export class Cell {
  public chip: Chip | null = null;
  constructor(
    readonly cell_id: number,
    readonly x: number,
    readonly y: number,
    readonly type: TLandscape
  ) {}
}
