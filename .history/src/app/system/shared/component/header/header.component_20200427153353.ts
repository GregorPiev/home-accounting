import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  user: User;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.user =  JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.route.navigate(['/login']);
  }

}
