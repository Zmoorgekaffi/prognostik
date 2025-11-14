import { CommonModule } from '@angular/common';
import { Component, inject, AfterViewInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpData } from '../../services/wp-data';
import { Section } from '../shared/section/section';
import { Button } from '../shared/button/button';
import { Contact } from '../shared/contact/contact';
import { CallToAction } from '../shared/call-to-action/call-to-action';
import { Footer } from '../shared/footer/footer';



@Component({
  selector: 'app-angebot-single-page',
  imports: [CommonModule, Section, Button, Contact, CallToAction, Footer],
  templateUrl: './angebot-single-page.html',
  styleUrl: './angebot-single-page.scss',
})
export class AngebotSinglePage implements AfterViewInit {
  router = inject(ActivatedRoute);
  wpData = inject(WpData);

  angebotObject = signal<any>(null);

  id = '';

  constructor() {
    this.id = this.router.snapshot.paramMap.get('id') || '';
  }

  ngAfterViewInit(): void {
    this.subscribeAngebot();
  }

  subscribeAngebot() {
    this.wpData.getSingleAngebot(this.id).subscribe((data) => {
      this.angebotObject.set(data['acf']);
      console.log(this.angebotObject());
    });
  }
}
