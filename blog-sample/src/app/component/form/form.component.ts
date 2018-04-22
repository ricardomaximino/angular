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
  @Input() inputs: string[];
  @Input() textareas: string[];

  ngOnInit() {
   /*  for (let i = 0; i < this.formConfig.inputs.length; i++) {
      this.inputs.push('rtrt');
    }
    for (let i = 0; i < this.formConfig.textareas.length; i++) {
      this.textareas.push('trtr');
    } */
    console.log(this.inputs);
    console.log(this.textareas);
  }

  submit() {
    const data = new FormData();
    data.inputs = this.inputs;
    data.textareas = this.textareas;
    this.formsubmit.emit(data);
  }
}
