import {Component, Input} from '@angular/core';
import {TLandscape} from "../../models/Cell";
import Chip from "../../models/Chip";

@Component({
  selector: 'app-field-cell',
  templateUrl: './field-cell.component.html',
  styleUrls: ['./field-cell.component.scss']
})
export class FieldCellComponent {
  @Input() type: TLandscape;
  @Input() chip: Chip | null = null;
}
