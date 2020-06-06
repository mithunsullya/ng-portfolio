import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: [''],
      message: [''],
    });
   }

   get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }

  ngOnInit() {
  }

}
