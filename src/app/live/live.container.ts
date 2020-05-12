import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveContainer implements OnInit {
  data: any = {
    prop: 'bottom',
  };
  data2: any = {
    prop: 'bottom'
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

  onEventChild(e) {
    this.data2.prop = 'top';
  }

  changeValue() {
    this.data2.prop = 'top';
  }

  changeObject() {
    this.data = { prop: 'top' };
  }

  changeWithObservable() {
    this.userService.loadUser({ firstName: 'Bob', lastName: 'Smith' });
  }
}
