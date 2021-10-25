import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  val = 1;
  form1 = this.fb.group({
    number: ['', [Validators.required, Validators.pattern("^[1-9]$|^[1][0]$")]],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

}
