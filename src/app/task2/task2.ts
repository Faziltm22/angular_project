import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-task2',
  standalone: true,          // <-- Add standalone if you want it standalone
  imports: [CommonModule],   // <-- Add CommonModule here
  templateUrl: './task2.html',
  styleUrls: ['./task2.css'] // <-- fix 'styleUrl' to 'styleUrls'
})
export class Task2 {
// component.ts
menu = ['star', 'clock', 'users', 'th', 'voicemail'];
names = ['Favorite','recent','contact','keypad','Voicemail']
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
hoveredIndex: number = -1;

getItemStyle(index: number): any {
  const total = this.menu.length;
  const angle = (Math.PI / 2) * (index / (total - 1)); // radial spread
  const radius = 135;

  const x = -Math.cos(angle) * radius;
  const y = -Math.sin(angle) * radius;

  // Add 10px upward when hovered
  const popupOffset = this.hoveredIndex === index ? -5 : 0;

  return {
    transform: this.isMenuOpen
      ? `translate(${x}px, ${y + popupOffset}px)`
      : 'translate(0, 0)',
    opacity: this.isMenuOpen ? 1 : 0,
    transition: 'transform 0.3s ease, opacity 0.3s ease'
  };
}

}

