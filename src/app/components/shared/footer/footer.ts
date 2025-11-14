import { Component, inject } from '@angular/core';
import { Section } from '../section/section';
import { SectionSubTitle } from '../section-sub-title/section-sub-title';
import { WpData } from '../../../services/wp-data';


@Component({
  selector: 'app-footer',
  imports: [Section, SectionSubTitle],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  wpData = inject(WpData);
}
