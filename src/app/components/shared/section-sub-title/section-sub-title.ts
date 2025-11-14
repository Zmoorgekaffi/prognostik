import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-sub-title',
  imports: [],
  templateUrl: './section-sub-title.html',
  styleUrl: './section-sub-title.scss',
})
export class SectionSubTitle {
  @Input() titleText: string = 'Das ist ein Standart Text';
}
