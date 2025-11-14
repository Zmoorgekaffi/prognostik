import { Component, inject, effect } from '@angular/core';
import { Section } from '../section/section';
import { SectionTitle } from '../section-title/section-title';
import { SectionSubTitle } from '../section-sub-title/section-sub-title';
import { WpData } from '../../../services/wp-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-angebot',
  imports: [Section, SectionTitle, SectionSubTitle, CommonModule],
  templateUrl: './angebot.html',
  styleUrl: './angebot.scss'
})
export class Angebot {
  wpData = inject(WpData);
  router = inject(Router);
  angebote:any[] = [];

  constructor() {
    effect(() => {
      const data = this.wpData._dataAngebote();
      if(data) {
        this.angebote = data;        
      }
    })
  }

  redirect(id:string, slug:string) {    
    this.router.navigate([`/prognostik/${slug}/${id}`]);
  }
}
