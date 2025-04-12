import { Component } from '@angular/core';
import { UpgradesComponent, UpgradeData } from './upgrades/upgrades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UpgradesComponent] // Import the UpgradesComponent so its selector is recognized.
})
export class AppComponent {
  title = 'Hamburger Clicker Game';
  points: number = 0;
  multiplier: number = 1;

  // Called when the user clicks the hamburger button.
  handleClick(): void {
    this.points += this.multiplier;
  }

  // Handles the upgrade purchase event.
  // Every time an upgrade is purchased, if the user has enough points,
  // the cost is deducted and the multiplier is set to the upgrade’s multiplier.
  handleUpgradeBought({ cost, multiplier }: UpgradeData): void {
    if (this.points >= cost) {
      this.points -= cost;
      // For Grill upgrades, this will always set the multiplier to 2.
      this.multiplier = multiplier;
      console.log('Upgrade purchased; multiplier is now', multiplier);
    } else {
      console.log('Not enough points to complete upgrade.');
    }
  }
}
