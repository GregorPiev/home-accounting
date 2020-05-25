import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventsService } from './../../shared/services/events.service';
import { CategoriesService } from './../../shared/services/categories.service';
import { mergeMap } from 'rxjs/operators';
import { WFMEvent } from './../../shared/models/event.model';
import { Category } from './../../shared/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wfm-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {
  event: WFMEvent;
  category: Category;
  isLoaded = false;
  sub1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: Params) => {
          console.log('Params:', params);
          return this.eventsService.getEventById(params.id);
        }),
        mergeMap((event: WFMEvent) => {
          this.event = event;
          console.log('Event:', event);
          return this.categoriesService.getCategoryById(event.category);
        })
      )
      .subscribe((category: Category) => {
        console.log('Category:', category);
        this.category = category;
        this.isLoaded = true;
      });

  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }

}
