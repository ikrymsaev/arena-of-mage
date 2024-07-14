import {Component} from '@angular/core';
import {FieldService} from "../../services/field/field.service";
import {ControlService} from "../../services/control/control.service";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  constructor(
    readonly fieldService: FieldService,
    readonly controlService: ControlService,
  ) {}
}
