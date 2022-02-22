import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  step: string = 'info';
  isSubmitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  isFormSubmitted(isSubmitted: boolean) {
    this.isSubmitted = isSubmitted;
  }
}
