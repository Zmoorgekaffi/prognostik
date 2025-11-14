import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, inject, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/header/header';
import { WpData } from './services/wp-data';
WpData;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements AfterViewInit {
  protected readonly title = signal('prognostik');
  wpData = inject(WpData);

  ngAfterViewInit(): void {
    this.wpData.getData('kontaktdaten').subscribe((data) => {
      this.wpData._contactData.set(data[0]['acf']);
      console.log(this.wpData._contactData(), 'asldbhasiudh');
    });
    this.wpData.getData('call_to_action').subscribe((data) => {
      this.wpData._callToActionData.set(data[0]['acf']);
      console.log(this.wpData._callToActionData(), 'ilsdbflsbhdfhbse');
    });
    this.wpData.getData('angebote').subscribe((data) => {
      this.wpData._dataAngebote.set(data);
    });
  }
}
