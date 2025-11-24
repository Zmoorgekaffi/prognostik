import { Component, inject, signal, AfterViewInit } from '@angular/core';
import { WpData } from '../../services/wp-data';
import { Contact } from '../shared/contact/contact';
import { CallToAction } from '../shared/call-to-action/call-to-action';
import { Footer } from '../shared/footer/footer';
import { Intro } from './intro/intro';


@Component({
  selector: 'app-about-me',
  imports: [Contact, CallToAction, Footer, Intro],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe implements AfterViewInit{
  wpData = inject(WpData);
  data = signal<any>(null);

  constructor() {

  }

  ngAfterViewInit(): void {
    this.setData();
  }

  setData() {
    this.wpData.getData('uber_mich').subscribe((data)=>{
      this.data.set(data[0]['acf']);
      console.log('hier ist die data von über mich',this.data());
    })
  }
}
