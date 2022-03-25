import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  @Output('onAlert') onAlert = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handlerAlert(value: string) {
    this.onAlert.emit(value)
  }
}
