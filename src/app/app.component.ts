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

  // Track the player's points.
  points = 0;

  // The effect (points per click) starts at 1.
  // clickValue = 1;
  clickValue = 0;
  isMultiplerActive = false;
  /**
   * Called when the player clicks "Cook a Hamburger".
   */
  handleClick(): void {
    this.points++;
    this.clickValue++;
    if (this.isMultiplerActive) {
      // this.points += this.clickValue;
    }
  }

  /**
   * Handles upgrade purchases.
   * @param upgradeCost The cost to purchase the upgrade.
   * @param multiplier The factor by which this upgrade multiplies burger effect.
   */
  handleUpgradeBought(upgradeCost: number, multiplier: number): void {
    if (this.points >= upgradeCost) {
      this.points -= upgradeCost;
      // Multiply the current click effect by the upgrade multiplier.
      this.clickValue *= multiplier;
      this.isMultiplerActive = true;
      console.log('multiplier: ', multiplier);
    }
  }
}
