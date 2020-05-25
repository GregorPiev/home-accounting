import { Component, OnInit } from '@angular/core';
import { BillServices } from './../shared/services/bill.services';
import { CategoriesService } from './../shared/services/categories.service';
import { EventsService } from './../shared/services/events.service';

@Component({
  selector: 'wfm-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {

  constructor(
    private billServices: BillServices,
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
  }

}
