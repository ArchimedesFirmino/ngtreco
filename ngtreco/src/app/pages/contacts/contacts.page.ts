import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage {

  public env = environment;
  public success = false;
  public contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log(this.contact);
  }

}
