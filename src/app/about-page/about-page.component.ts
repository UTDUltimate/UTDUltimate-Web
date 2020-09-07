import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FAQ } from './faq';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPageComponent implements OnInit {
  faqs = new FAQ().data;

  events: string[] = [
    'Summer Sand Mini',
    'Summer Orientation Fairs',
    'Welcome Week Mixed Mini Tournament',
    'Diversity and Inclusion Meeting',
    'Viva Volunteer',
    'Homecoming Tailgate',
    'Winter and Spring Banquets',
    'Spring Club Sports Banquet'
  ];

  constructor() { }

  ngOnInit(): void {  }

}
