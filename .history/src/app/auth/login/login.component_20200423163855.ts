import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(
    private usersService: UsersService,
    private authSevice: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin) {
          this.showMessage({ text: 'You can enter in now', type: 'success' })
        }
      })

    this.mesagge = new Message({ text: '', type: 'danger' });
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);

  }

  onSubmit() {
    console.log(this.form);
    const formData = this.form.value;
    this.usersService.getUserById(formData.email)
      .subscribe((user: User) => {
        if (user) {
          console.log('User:', user);
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authSevice.login();
            this.router.navigate(['/']);
          } else {
            this.showMessage({ text: 'Invalid password', type: 'danger' });
          }
        } else {
          this.showMessage({ text: 'Invalid user', type: 'danger' });

        }

      })
  }

}
