import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, effect } from '@angular/core';
import { WpData } from '../../../services/wp-data';
import { CommonModule } from '@angular/common';

//interfaces
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
  sliderImages: HeroSliderImg[] = [{ full_image_url: '' }];

  constructor() {
    effect(() => {
      const data = this.wpData._data();
      const slider = data?.photo_gallery?.hero_slider_bilder[0];

      if (slider) {
        this.sliderImages = slider;
      }
    });
  }
}
