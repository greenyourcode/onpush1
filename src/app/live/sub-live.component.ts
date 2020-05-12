import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-live',
  templateUrl: './sub-live.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubLiveComponent implements OnChanges, OnInit {
  @Input() data2: any;
  @Input() data: any;
  @Input() user: any;
  @Input() firstName: any;
  @Output() eventChild = new EventEmitter();

  public dataNested = {
    prop: 'toto'
  };

  constructor() { }

  ngOnInit() {
  }

  changeNested() {
    this.dataNested.prop = 'trotro';
  }

  ngOnChanges() {
    console.log('Block A change');
  }

}
