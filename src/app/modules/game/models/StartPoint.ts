import Chip from "./Chip";

export class StartPoint {
  constructor(
    readonly point_id: number,
    readonly point_order: number,
    public chip: Chip | null,
  ) {}
}
