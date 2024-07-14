import {Injectable} from '@angular/core';
import {FieldService} from "../field/field.service";
import Chip from "../../models/Chip";
import {TCoordinates} from "../../../../common/types/Coordinates";

@Injectable()
export class MoveService {
  constructor(
    private readonly fieldService: FieldService
  ) {}
  public moveChipTo(chip: Chip, coords: TCoordinates) {
    this.canMovingTo(coords);
    if (!chip.coordinates) {
      const point =
        this.fieldService.p1_startPoints.find((item) => item.chip?.chip_id === chip.chip_id) ||
        this.fieldService.p2_startPoints.find((item) => item.chip?.chip_id === chip.chip_id);
      if (point) {
        point.chip = null;
      }
    } else {
      this.fieldService.setChipToCellByCoords(chip.coordinates, null);
    }
    this.fieldService.setChipToCellByCoords(coords, chip);
  }

  private canMovingTo(coords: TCoordinates): boolean {
    const targetCell = this.fieldService.getCellByCoords(coords);
    if (targetCell.type === 'lake') {
      throw new Error("Сan't walk on water");
    }
    if (!!targetCell.chip) {
      throw new Error("Cell is not empty");
    }
    return true;
  }
}
