import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { BillServices } from './../../shared/services/bill.services';
import { Bill } from '../../shared/models/bill.model';
import { pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

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
  constructor(
    private eventsService: EventsService,
    private billServices: BillServices
  ) { }

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

    this.billServices.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;

        if (type === 'outcome') {
          if (amount > bill.value) {
            return;
          } else {
            value = bill.value - amount;
          }
        } else {
          value = bill.value + amount;
        }
        this.billServices.updateBill({ value, currency: bill.currency })
          .pipe(
            mergeMap(() => this.eventsService.addEvent(event))
          )
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: ' ',
              category: 1,
              type: 'outcome'
            });
          });
      });


    ;
  }
}
