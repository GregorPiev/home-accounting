import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventsService } from './../../shared/services/events.service';
import { CategoriesService } from './../../shared/services/categories.service';

@Component({
  selector: 'wfm-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        console.log('Params Id:', params.id);
      });
  }

}
