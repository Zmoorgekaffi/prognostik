import { Component, inject, effect } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { Section } from '../../shared/section/section';
import { SectionSubTitle } from '../../shared/section-sub-title/section-sub-title';
import { WpData } from '../../../services/wp-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  imports: [SectionTitle, Section, SectionSubTitle, CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  wpData = inject(WpData);

  constructor() {
    effect(() => {
      console.log(this.wpData._data());
      console.log(this.wpData._dataAngebote());
    });
  }
}
