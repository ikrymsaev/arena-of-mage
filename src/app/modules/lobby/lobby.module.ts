import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import {FormsModule} from "@angular/forms";
import {RegisterService} from "./components/lobby/register.service";



@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RegisterService
  ],
  exports: [
    LobbyComponent
  ]
})
export class LobbyModule { }
