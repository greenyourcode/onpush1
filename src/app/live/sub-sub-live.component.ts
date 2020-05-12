import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sub-sub-live',
  templateUrl: './sub-sub-live.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubSubLiveComponent implements OnChanges, OnInit {
  @Input() data2: any;
  @Input() data: any;
  @Input() dataNested: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Block A change');
  }

}
