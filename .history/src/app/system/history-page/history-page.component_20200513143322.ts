import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from './../shared/services/categories.service';
import { EventsService } from './../shared/services/events.service';
import { combineLatest, Subscription } from 'rxjs';
import { WFMEvent } from './../shared/models/event.model';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'wfm-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.sub1 = combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents)
      .subscribe((data: [Category[], WFMEvent]) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }
}
