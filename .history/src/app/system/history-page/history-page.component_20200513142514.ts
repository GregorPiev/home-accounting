import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../shared/services/categories.service';
import { EventsService } from './../shared/services/events.service';

@Component({
  selector: 'wfm-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
  }

}
