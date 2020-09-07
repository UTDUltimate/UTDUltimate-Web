import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../services/contact-us.service'

// needed to use jquery
declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    public name: string = null;
    public email: string = null;
    public team: string = null;
    public message: string = null;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("onsubmit clicked: " + this.name + ", " + this.email + ", " + this.team + ', ' + this.message);
    this.contactUsService.sendEmail(this.name, this.email, this.team, this.message);
    this.resetFields();
  }

  public checkValidForm(): boolean {
    if (this.name == null || this.email == null || this.team == null || this.message == null || this.name == '' || this.email == '' || this.team == '' || this.message == '') {
            return true;
    }
    return false;
  }

  private resetFields(): void {
      this.name = null;
      this.email = null;
      this.team = null;
      this.message = null;
      $("#contact-us").modal('toggle');
  }

}
