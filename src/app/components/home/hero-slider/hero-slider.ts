import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, effect, ViewChild, ElementRef } from '@angular/core';
import { WpData } from '../../../services/wp-data';
import { CommonModule } from '@angular/common';

interface HeroSliderImg {
  full_image_url: string;
}

@Component({
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSlider {
  wpData = inject(WpData);

  @ViewChild('swiper', { static: false }) swiperEl?: ElementRef;

  sliderImages: HeroSliderImg[] = [];

  constructor() {
    effect(() => {
      const data = this.wpData._data();
      const slider = data?.photo_gallery?.hero_slider_bilder?.[0];

      if (slider && slider.length > 0) {
        this.sliderImages = slider;

        // 🔥 Init neu starten, nachdem Angular DOM fertig ist
        queueMicrotask(() => this.reInitSwiper());
      }
    });
  }

  private reInitSwiper() {
    const el = this.swiperEl?.nativeElement;

    if (el) {
      // Swiper Web Component API
      el.initialize();
    }
  }
}