import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.bookForm = fb.group({
      title: [''],
      author: [''],
      published: [''],
      price: ['']
    })
   }

   onSubmit() {
     console.log(this.bookForm.value);
   }

  ngOnInit() {
    
  }

}
