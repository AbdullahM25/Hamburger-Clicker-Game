import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradesComponent } from './upgrades/upgrades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UpgradesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hamburger Clicker Game';

  // Total burgers cooked starts at 0.
  points = 0;

  // Current click effect (burgers per click) starts at 1.
  clickValue = 1;
  isMultiplerActive = false;

  /**
   * Called when the player clicks "Cook a Hamburger".
   * Adds clickValue to the total points.
   */
  handleClick(): void {
    this.points += this.clickValue;
  }

  /**
   * Handles upgrade purchases.
   * Deducts the upgrade cost and doubles the click value so that
   * subsequent clicks yield double the burgers (e.g., 1 -> 2, 2 -> 4, etc.).
   *
   * @param upgradeCost The cost required for this upgrade.
   * @param multiplier  (Provided by the event but unused here, as we always double.)
   */
  handleUpgradeBought(upgradeCost: number, multiplier: number): void {
    if (this.points >= upgradeCost) {
      this.points -= upgradeCost;
      // Double the current click effect.
      this.clickValue *= 2;
      this.isMultiplerActive = true;
      console.log('Upgrade bought. Click value is now:', this.clickValue);
    }
  }
}
