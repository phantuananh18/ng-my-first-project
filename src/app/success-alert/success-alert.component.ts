import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  @Output('onAlert') onAlert = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerAlert(value: string) {
    this.onAlert.emit(value)
  }
}
