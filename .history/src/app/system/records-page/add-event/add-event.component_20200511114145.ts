import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[] = [];
  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Spending' }
  ];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const { description, category, type } = form.value;
    let { amount } = form.value;
    // tslint:disable-next-line: curly
    if (amount < 0) amount *= -1;
    const date = moment().format('DD.MM.YYYY HH:mm:ss').toString();
    const event = new WFMEvent(
      type,
      amount,
      +category,
      date,
      description
    );
  }
}
