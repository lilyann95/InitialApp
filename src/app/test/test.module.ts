import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ChildTestComponent } from './partial/child-test/child-test.component';
import { Child2TestComponent } from './partial/child2-test/child2-test.component';

//Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TestComponent, ChildTestComponent, Child2TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    //Angular Material
    MatButtonModule,
    MatIconModule,
  ],
})
export class TestModule {}
