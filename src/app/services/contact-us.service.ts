import { Injectable } from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: "root",
  })
  export class ContactUsService {
    constructor(private _snackBar: MatSnackBar) {}

    sendEmail(name:string, email: string, team: string, message: string) {
        this.openSnackBar("email sent to " + name + ", " + email + ", " + this.getEmail(team) + ', ' + message, 'Close');
    }

    private openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 5000,
        });
      }

      
    private getEmail(team: string): string {
        if (team == 'Whiplash') {
            return 'utdwomensultimate13@gmail.com';
        }
        else if (team == 'Woof') {
            return 'utdfrisbee@gmail.com';
        }
        else {
            alert("Please select a team.");
        }
    }
  }