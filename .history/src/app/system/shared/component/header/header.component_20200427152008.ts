import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from '../../directive/dropdown.directive';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
