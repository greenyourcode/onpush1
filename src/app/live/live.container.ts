import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveContainer implements OnInit {
  liveObject = {
    field1: 'bottom'
  };
  data: any = {
    prop: 'bottom',
  };
  firstName: any;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.userService.user$.subscribe((u) => {
      this.firstName = u.firstName;
      // this.cd.markForCheck();
    });
  }

  onEvent(e) {
    this.liveObject.field1 = 'top';
  }

  changeValue() {
    this.liveObject.field1 = 'top';
  }

  changeObject() {
    this.data = { prop: 'top' };
  }

  changeUser() {
    this.userService.loadUser({ firstName: 'Bob', lastName: 'Smith' });
  }
}
