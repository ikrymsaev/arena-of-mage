import { Injectable } from '@angular/core';
import {Cell, TLandscape} from "../../models/Cell";
import shuffle from "../../../../utils/shuffle";
import {StartPoint} from "../../models/StartPoint";
import Chip from "../../models/Chip";
import {TCoordinates} from "../../../../common/types/Coordinates";

@Injectable()
export class FieldService {
  private width: number;
  private height: number;

  public cells: Array<Cell[]> = [];
  public p1_startPoints: Array<StartPoint>;
  public p2_startPoints: Array<StartPoint>;

  public getCellByCoords (coords: TCoordinates) {
    const targetCell = this.cells[coords.y][coords.x];
    if (!targetCell) {
      throw new Error("Not found cell with coordinates " + `x: ${coords.x} ` + `y: ${coords.y}`);
    }
    return targetCell;
  }
  public setChipToCellByCoords(coords: TCoordinates, chip: Chip | null) {
    const targetCell = this.getCellByCoords(coords);
    targetCell.chip = chip;
    if (!chip) return;
    chip.coordinates = coords;
  }

  public generate(w: number, h: number): void {
    this.width = w;
    this.height = h;
    const result: Array<Cell[]> = [];
    const landscape = this.generateLandscape(this.height * this.width);
    let cell_id = 1;
    for (let i = 0; i < this.height; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.width; j++) {
        const type = landscape.pop();
        row.push(new Cell(cell_id, j, i, type ?? 'plain'))
        cell_id++;
      }
      result.push(row);
    }

    this.cells = result;
    this.p1_startPoints = [];
    this.p2_startPoints = [];
    for (let i = 1; i <= w / 2; i++) {
      this.p1_startPoints.push(new StartPoint(i, i, null));
      this.p2_startPoints.push(new StartPoint(i + 6, i, null));
    }
  }

  private generateLandscape(count: number): TLandscape[] {
    const result: TLandscape[] = Array(count).fill('plain');

    const countOfJungle = Math.floor((count / 100) * 15);
    result.fill('jungle', 0, countOfJungle);

    const countOfMountains = Math.floor((count / 100) * 15);
    const mountainsEnd = countOfJungle + countOfMountains;
    result.fill('mountain', countOfJungle, mountainsEnd);

    const countOfLakes = Math.floor((count / 100) * 7);
    const LakesEnd = mountainsEnd + countOfLakes;
    result.fill('lake', mountainsEnd, LakesEnd);

    const countOfSwamps = Math.floor((count / 100) * 5);
    const swampsEnd = LakesEnd + countOfSwamps;
    result.fill('swamp', LakesEnd, swampsEnd);

    return shuffle<TLandscape>(result);
  }
}
