import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  signupForm:FormGroup;
  get f() { return this.signupForm.controls; }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        'ruleName':['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]+$")]],
        'value':[10, [Validators.required]],
        'avatar':''
      });
  }

submitForm(){
    this.submitted = true;
    //console.log(this.signupForm.controls);
    if (this.signupForm.invalid) { return }
  else{//Porcess Form
    console.log(this.signupForm.value)
  }
}

onFileChange(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.signupForm.get('avatar').setValue(file);
  }
}

}
