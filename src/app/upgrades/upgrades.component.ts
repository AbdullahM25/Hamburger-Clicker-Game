import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UpgradeData {
  cost: number;
  multiplier: number;
}

@Component({
  selector: 'app-upgrades',
  standalone: true,
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css'],
  imports: [CommonModule] // Enables *ngFor, *ngIf, etc.
})
export class UpgradesComponent {
  @Input() points: number = 0;
  @Output() upgradeBought = new EventEmitter<UpgradeData>();

  // Define your available upgrades.
  upgrades = [
    { name: 'Grill', cost: 20, multiplier: 2 },
    { name: 'Burger Factory', cost: 50, multiplier: 5 } // Example extra upgrade.
  ];

  // This function is called when any upgrade is purchased.
  buyUpgrade(upgrade: { name: string; cost: number; multiplier: number }): void {
    if (this.points >= upgrade.cost) {
      this.upgradeBought.emit({ cost: upgrade.cost, multiplier: upgrade.multiplier });
      console.log(`${upgrade.name} upgrade purchased.`);
    } else {
      console.log('Not enough points for this upgrade.');
    }
  }
}
