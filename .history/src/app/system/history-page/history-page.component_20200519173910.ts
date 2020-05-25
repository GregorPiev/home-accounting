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
  isLoaded = false;
  categories: Category[] = [];
  events: WFMEvent[] = [];
  chartData = [];
  isFilterVisible = false;

  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.sub1 = combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents())
      .subscribe((data: [Category[], WFMEvent[]]) => {
        console.log(data);
        this.categories = data[0];
        this.events = data[1];
        this.isLoaded = true;

        this.calculateChartData();
      });
  }

  calculateChartData(): void {
    this.categories.forEach((c) => {
      const catEvent = this.events.filter((e) => {
        return e.category === c.id && e.type === 'outcome';
      });
      this.chartData.push({
        name: c.name,
        value: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

  private toggleFilterVisibility(dir: boolean) {

  }

  openFilter() {

  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }
}
