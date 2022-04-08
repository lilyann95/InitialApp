import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    // this.route.navigate(['/results'], { queryParams: { test: uid }, fragment: 'top' });
  }

  edithandler(uid: string) {}

  deletehandler() {}
}
