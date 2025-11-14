import { Component, inject, AfterViewInit, signal } from '@angular/core';
import { WpData } from '../../services/wp-data';
import { CommonModule } from '@angular/common';
import { Angebot } from '../shared/angebot/angebot';
import { Contact } from '../shared/contact/contact';
import { CallToAction } from '../shared/call-to-action/call-to-action';
import { Footer } from '../shared/footer/footer';



@Component({
  selector: 'app-angebote',
  imports: [CommonModule, Angebot, Contact, CallToAction, Footer],
  templateUrl: './angebote.html',
  styleUrl: './angebote.scss',
})
export class Angebote implements AfterViewInit {
  wpData = inject(WpData);
  data: any = signal(null);

  ngAfterViewInit(): void {
    this.wpData.getData('angebote_seite').subscribe({
      next: (data) => {
        this.data.set(data[0]['acf']);
      }
    });
  }
}
