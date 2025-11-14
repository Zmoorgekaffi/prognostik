import { Component, inject } from '@angular/core';
import { Section } from '../section/section';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../section-title/section-title';
import { WpData } from '../../../services/wp-data';


@Component({
  selector: 'app-contact',
  imports: [Section, CommonModule, SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  wpData = inject(WpData);

}
