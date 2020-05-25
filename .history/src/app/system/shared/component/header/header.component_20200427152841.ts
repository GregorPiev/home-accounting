import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.route.navigate(['/login']);
  }

}
