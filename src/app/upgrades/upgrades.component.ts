import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Upgrade {
  name: string;
  cost: number;
  multiplier: number;
}

@Component({
  selector: 'app-upgrades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css'],
})
export class UpgradesComponent implements OnChanges {
  @Input() points!: number;
  @Output() upgradeBought = new EventEmitter<{
    cost: number;
    multiplier: number;
  }>();

  // Two upgrades:
  upgrades: Upgrade[] = [
    {
      name: 'Grill',
      cost: 20,
      multiplier: 2, // Doubles the burger effect.
    },
    {
      name: 'Burger Factory',
      cost: 50,
      multiplier: 1.5, // Multiplies the burger effect by 1.5.
    },
  ];

  ngOnChanges(): void {
    // You can add any additional logic here to unlock upgrades based on points, if desired.
  }

  /**
   * Emit the purchase event for an upgrade.
   * @param upgrade The upgrade to be purchased.
   */
  buyUpgrade(upgrade: Upgrade): void {
    this.upgradeBought.emit({
      cost: upgrade.cost,
      multiplier: upgrade.multiplier,
    });
  }
}
