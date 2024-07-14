import {Component, Input} from '@angular/core';
import {ControlService} from "../../services/control/control.service";
import Chip from "../../models/Chip";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() chip: Chip | null = null;

  get cardInfo() {
    return this.chip?.activeCard;
  }
  get chipColor() {
    return this.chip?.color;
  }
  get chipNumber() {
    return this.chip?.number;
  }


  constructor(
    public controlService: ControlService
  ) {}

  get cardAvatarUrl() {
    if (!this.cardInfo?.id) return ''
    return `url('../../../../../assets/cards/${this.cardInfo.id}-min.jpg')`
  }
}
