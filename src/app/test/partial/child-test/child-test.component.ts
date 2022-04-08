import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss'],
})
export class ChildTestComponent implements OnInit {
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editClickHandler() {
    this.edit.emit();
  }

  deleteClickHandler() {
    this.delete.emit();
  }
}
