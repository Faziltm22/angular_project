import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-task1',
  imports: [CommonModule],
  templateUrl: './task1.html',
  styleUrl: './task1.css'
})
export class Task1 {
  activeIndex = 0;
  icons = ['star', 'clock', 'users', 'keyboard', 'voicemail'];
  indicatorPositions = [1, 58, 117, 176, 233]; // Pre-calculated positions

  selectTab(index: number) {
    this.activeIndex = index;
  }

  getIndicatorPosition() {
    return {
      transform: `translateX(${this.indicatorPositions[this.activeIndex]}px)`
    };
  }

}

