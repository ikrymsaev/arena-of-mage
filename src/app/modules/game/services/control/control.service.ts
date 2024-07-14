import {Injectable, signal, WritableSignal} from '@angular/core';
import Chip from "../../models/Chip";
import {MoveService} from "../move/move.service";

@Injectable()
export class ControlService {
  public selectedChip: WritableSignal<Chip | null> = signal<Chip | null>(null);

  constructor(
    private readonly moveService: MoveService
  ) {}

  public rightClickCell(coords: { x: number, y: number }) {
    const selectedChip = this.selectedChip();
    if (selectedChip !== null) {
      this.moveService.moveChipTo(selectedChip, coords);
      this.selectedChip.set(null);
    }
  }

  /** Выбрать фишку */
  public selectChip(chip: Chip | null) {
    if (chip?.chip_id === this.selectedChip()?.chip_id) {
      this.selectedChip.set(null);
      return;
    }
    this.selectedChip.set(chip);
  }
}
