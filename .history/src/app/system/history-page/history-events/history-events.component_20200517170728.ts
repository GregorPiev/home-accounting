import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { WFMEvent } from './../../shared/models/event.model';

@Component({
  selector: 'wfm-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: WFMEvent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
