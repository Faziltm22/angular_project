import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task4.html',
  styleUrls: ['./task4.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class Task4 implements OnInit, OnDestroy {
  icons = ['star', 'clock', 'users', 'keyboard', 'voicemail'];
  labels = ['Favorites', 'Recent', 'Contacts', 'Keypad', 'Voicemail'];
  color = [' #2965e7', '#f4a11bff', '#10b128ff', '#b82121ff', '#180f97ff'];
  activeIndex = 0;
  intervalId: any;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.updateBodyColor(); // Set once on load
    this.startAutoSwitch(); // Start auto switching tabs, but no color change
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  selectTab(index: number): void {
    this.activeIndex = index;
    this.updateBodyColor(); // Change body color only on manual click
  }

  startAutoSwitch(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.icons.length;
    }, 2000);
  }

  updateBodyColor(): void {
    this.renderer.setStyle(this.document.body, 'background-color', this.color[this.activeIndex]);
  }
}
