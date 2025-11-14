import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from './api-url';

@Injectable({
  providedIn: 'root',
})
export class WpData {
  /**
   * daten werden immer in der überseiten komponente geladen,
   * dann wird das DataSignal gesettet und von childkomponenten
   * aus, drauf zu gegriffen.
   */
  private http = inject(HttpClient);
  private apiUrl = inject(ApiUrl);
  private url: string = this.apiUrl.url;

  _data: any = signal({});
  _dataAngebote: any = signal([]);
  _dataTestimonials: any = signal([]);
  _callToActionData: any = signal({});
  _contactData:any = signal({});

  getData(folder: string): Observable<any[]> {
    const url = `${this.url}/wp-json/wp/v2/${folder}`;
    return this.http.get<any[]>(url);
  }

  getSingleAngebot(id:string): Observable<any> {
    const url = `${this.url}/wp-json/wp/v2/angebote/${id}`;    
    return this.http.get<any>(url);
  }
}
