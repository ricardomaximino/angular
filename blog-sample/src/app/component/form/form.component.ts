import { Component, OnInit, Input } from '@angular/core';
import { FormConfig } from './form.component.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formConfig: FormConfig;

  constructor() { }

  ngOnInit() {
  }

}
