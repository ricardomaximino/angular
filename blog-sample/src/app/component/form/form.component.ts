import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormConfig, FormData } from './form.component.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formConfig: FormConfig;
  @Output() formsubmit = new EventEmitter();
  input0: string;
  input1: string;
  input2: string;
  textarea: string;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    const data = new FormData();
    data.inputs = [this.input0, this.input1, this.input2];
    data.textarea = this.textarea;
    console.log('submited');
    this.formsubmit.emit(data);
  }
}
