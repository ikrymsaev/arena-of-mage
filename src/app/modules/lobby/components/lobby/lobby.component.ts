import { Component } from '@angular/core';
import {RegisterService} from "./register.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  providers: [RegisterService]
})
export class LobbyComponent {
  title = ''
  width = 12
  height = 12

  constructor(private registerService: RegisterService) {}

  create() {
    this.registerService.registerGame(this.title, this.width, this.height);
  }

}
