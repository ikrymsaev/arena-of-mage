import { Injectable } from '@angular/core';
import {LobbyModule} from "../../lobby.module";

@Injectable()
export class RegisterService {
  registerGame(title: string, w: number, h: number) {
    console.log('create', title, w, h);
  }
}
