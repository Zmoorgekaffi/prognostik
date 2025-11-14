import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WpData } from '../../../services/wp-data';
import { Button } from '../button/button';


@Component({
  selector: 'app-call-to-action',
  imports: [CommonModule, Button],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.scss'
})
export class CallToAction {

  wpData = inject(WpData); 
}
