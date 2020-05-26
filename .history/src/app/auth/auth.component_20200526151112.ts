import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animation } from '@angular/animations';
import { fadeStateTrigger } from '../shared/animations/fade.animation';

@Component({
  selector: 'wfm-auth',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger]
})

export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
