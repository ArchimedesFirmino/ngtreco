import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  public env = environment;
  myForm!: FormGroup;
  contact: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }


  sendContact(){
    const today = new Date();
    this.contact = this.myForm.value;
    this.contact.date = today.toISOString().replace('T', ' ').split('.')[0];
    this.contact.status = 'received';
    // Salva na API.
    this.http.post(`${this.env.apiBaseURL}/contatos`, this.contact)

  }
}
