import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, effect } from '@angular/core';
import { WpData } from '../../../services/wp-data';
import { Section } from '../section/section';
import { SectionTitle } from '../section-title/section-title';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, Section, SectionTitle],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {

  wpData = inject(WpData);
  testimonials:any[] = [];

  constructor() {
    effect(() => {
      this.testimonials = this.wpData._dataTestimonials();           
    }) 
  
  }
}
