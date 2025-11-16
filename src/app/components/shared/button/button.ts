import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() buttonText = 'Klick mich!'
  @Input() link = '#'
  router = inject(Router);

  openLink() {
    this.router.navigate([this.link]);
  }
}
