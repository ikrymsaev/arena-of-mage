import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import Card from "../../models/Card";
import Squad from "../../models/Squad";

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardInfo: Card | undefined
  @Input() squadColor: Squad['color']

  get cardAvatarUrl() {
    if (!this.cardInfo?.id) return ''
    return `url('../../../../../assets/cards/${this.cardInfo.id}-min.jpg')`
  }
  get attack() {
    if (!this.cardInfo?.stats.attack) return '-'
    if (this.cardInfo?.stats?.attack < 0) return this.cardInfo?.stats.attack;
    return `+${this.cardInfo.stats.attack}`
  }
  get shooting() {
    if (!this.cardInfo?.stats.shooting) return '-'
    return `${this.cardInfo?.stats.shooting.range}/${this.cardInfo?.stats.shooting.accuracy}`
  }
  get protection() {
    if (!this.cardInfo?.stats.protection) return '-'
    return `+${this.cardInfo.stats.protection}`
  }
  get health() {
    if (!this.cardInfo?.stats.health) return '-'
    return this.cardInfo.stats.health;
  }
}
