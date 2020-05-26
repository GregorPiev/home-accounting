import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { UsersService } from './../../shared/services/users.service';
import { Router } from '@angular/router';
import { fadeStateTrigger } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fadeStateTrigger]
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private usersService: UsersService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbidenEmail.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });

  }

  forbidenEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe(user => {
          if (user) {
            resolve({ forbidenEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
