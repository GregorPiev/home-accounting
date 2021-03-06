import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillServices } from './../shared/services/bill.services';
import { CategoriesService } from './../shared/services/categories.service';
import { EventsService } from './../shared/services/events.service';
import { combineLatest, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';
import { Category } from '../shared/models/category.model';
import { WFMEvent } from './../shared/models/event.model';
import { Category } from './../shared/models/category.model';

@Component({
  selector: 'wfm-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  bill: Bill;
  categories: Category[] = [];
  events: WFMEvent[] = [];
  sub1: Subscription;
  constructor(
    private billServices: BillServices,
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.sub1 = combineLatest(
      this.billServices.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Bill, Category[], WFMEvent[]]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.events = data[2];
      this.isLoaded = true;
    });
  }

  getCategoryCost(cat: Category): number {
    const catEvents = this.events.filter(e => e.category === cat.id && e.type === 'outcome');
    return catEvents.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }

  getGatPercent(cat: Category): string {
    return this.getPercent(cat) + '%';
  }

  private getPercent(cat: Category): number {
    const percent = (100 * this.getCategoryCost(cat)) / cat.capacity;
    return percent > 100 ? 100 : percent;
  }

  getCatColorClass(cat: Category): string {
    const percent = this.getPercent(cat);
    const className = percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
    return className;
  }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.sub1) this.sub1.unsubscribe();
  }

}
