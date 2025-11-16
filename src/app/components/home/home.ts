import { Component, inject } from '@angular/core';
import { HeroSlider } from './hero-slider/hero-slider';
import { WpData } from '../../services/wp-data';
import { Intro } from './intro/intro';
import { Angebot } from '../shared/angebot/angebot';
import { Testimonials } from '../shared/testimonials/testimonials';
import { CallToAction } from '../shared/call-to-action/call-to-action';
import { Footer } from '../shared/footer/footer';
import { Contact } from '../shared/contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroSlider, Intro, Angebot, Testimonials, CallToAction, Footer, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  wpData = inject(WpData);

  constructor() {
    this.wpData.getData('home').subscribe(data => {
      this.wpData._data.set(data[0]['acf']);
    })
    this.wpData.getData('testimonials').subscribe(data => {
      this.wpData._dataTestimonials.set(data);
    })
  }

}
