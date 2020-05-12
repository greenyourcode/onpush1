import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sub-live2',
  templateUrl: './sub-live2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubLive2Component implements OnChanges, OnInit {
  @Input() data2: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Sub Live2 change');
  }

}
