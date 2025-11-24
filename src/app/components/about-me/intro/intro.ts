import { Component, Input } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { SectionSubTitle } from '../../shared/section-sub-title/section-sub-title';
import { Section } from '../../shared/section/section';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-intro',
  imports: [SectionTitle, Section, SectionSubTitle, CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})
export class Intro {
  @Input() data: any;
}
