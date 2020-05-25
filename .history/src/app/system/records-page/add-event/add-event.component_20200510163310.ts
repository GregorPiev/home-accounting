import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[];
  constructor() { }

  ngOnInit() {
  }

}
