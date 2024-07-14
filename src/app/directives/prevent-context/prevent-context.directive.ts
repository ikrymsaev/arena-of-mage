import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[prevent-context]'
})
export class PreventContextDirective {

  @HostListener("contextmenu", ["$event"])
  public onContextMenu(event: MouseEvent) {
    event.preventDefault()
  }

}
