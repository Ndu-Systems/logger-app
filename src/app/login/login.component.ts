import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*
Form begin here
*/
  rForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private routeTo : Router
  ) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Password: [null, Validators.required]
    });
    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  login(data) {
    this.routeTo.navigate(['dashboard']);
  }

}
