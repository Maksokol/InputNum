import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR,} from "@angular/forms";
import {isNumeric} from "rxjs/internal-compatibility";


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumComponent),
  multi: true
};


@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NumComponent implements OnInit, ControlValueAccessor {
  public number = new FormControl();

  get num() {
    return this.number.value;
  }

  set num(val: any) {
    this.number.setValue(val);
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  inc() {
    if (isNumeric(this.number.value) && this.number.value < 10)
      this.num++;
  }

  dec() {
    if (isNumeric(this.number.value) && this.number.value > 1)
      this.num--;
  }

  isValid() {
    return (this.number.value <= 10 && this.number.value >= 1)
  }

  writeValue(value: any) {
    this.number.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {

    this.onTouched = fn;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.number.valueChanges.subscribe(val => {
      this.number.setErrors({'incorrect': !this.isValid()});
      if (this.onChange)
        this.onChange(val)

    });


  }

}
