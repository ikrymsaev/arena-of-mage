import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from "./game.component";
import { FieldComponent } from "./components/field/field.component";
import { FieldCellComponent } from "./components/field-cell/field-cell.component";
import { PreventContextDirective } from "../../directives/prevent-context/prevent-context.directive";
import { ControlService } from "./services/control/control.service";
import { GameService } from "./services/game/game.service";
import { FieldService } from "./services/field/field.service";
import { DeckService } from "./services/deck/deck.service";
import { CardComponent } from './components/card/card.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { StartCellComponent } from './components/start-cell/start-cell.component';
import { ChipComponent } from './components/chip/chip.component';
import { MoveService } from "./services/move/move.service";

@NgModule({
  declarations: [
    GameComponent,
    FieldComponent,
    FieldCellComponent,
    PreventContextDirective,
    CardComponent,
    ControlPanelComponent,
    StartCellComponent,
    ChipComponent
  ],
  providers: [
    GameService,
    FieldService,
    DeckService,
    ControlService,
    MoveService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
