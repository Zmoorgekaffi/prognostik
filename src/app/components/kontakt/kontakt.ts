import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpData } from '../../services/wp-data';
import { Footer } from '../shared/footer/footer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  imports: [CommonModule, Footer],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class Kontakt {
  wpData = inject(WpData);
  safeGoogleMapsUrl!: SafeResourceUrl;
  private sanitizer = inject(DomSanitizer);

  constructor() {
    effect(() => {
      const url = this.wpData._contactData()['googlemaps'];
      this.safeGoogleMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
}
