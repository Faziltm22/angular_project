import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-task3',
  imports: [CommonModule],
  templateUrl: './task3.html',
  styleUrl: './task3.css'
})
export class Task3 {
    activeIndex = 0;
  icons = ['star', 'clock', 'keyboard', 'users', 'voicemail'];
  indicatorPositions = [1, 58, 117, 176, 233]; // Pre-calculated positions

  selectTab(index: number) {
    this.activeIndex = index;
  }

  getIndicatorPosition() {
    return {
      transform: `translateX(${this.indicatorPositions[this.activeIndex]}px)`
    };
  }
   isUp = true;
   isActive = false;

  toggleStyle() {
    this.isActive = !this.isActive;
    this.isUp = !this.isUp;
    console.log('active');
    
    
  }
}
