import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
  })
  export class ContactUsService {

    sendEmail(email: string) {
        console.log("email sent to " + email);
    }


  }