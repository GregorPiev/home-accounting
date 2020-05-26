import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { BillServices } from './../../shared/services/bill.services';
import { Bill } from '../../shared/models/bill.model';
import { pipe, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Message } from './../../../shared/models/message.model';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;

  @Input() categories: Category[] = [];
  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Spending' }
  ];
  message: Message;
  constructor(
    private eventsService: EventsService,
    private billServices: BillServices
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text = '', 5000);
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

    this.sub1 = this.billServices.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;

        if (type === 'outcome') {
          if (amount > bill.value) {
            this.showMessage(`No money. Lack: ${amount - bill.value}`);
            return;
          } else {
            value = bill.value - amount;
          }
        } else {
          value = bill.value + amount;
        }
        this.sub2 = this.billServices.updateBill({ value, currency: bill.currency })
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
  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}