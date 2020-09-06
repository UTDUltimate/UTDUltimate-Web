import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../services/contact-us.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("onsubmit clicked");
    this.contactUsService.sendEmail('test');
  }
      

}
