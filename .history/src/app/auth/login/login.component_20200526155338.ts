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
    this.message = new Message('', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin) {
          this.showMessage({ text: 'You can enter in now', type: 'success' });
          //this.form.get()
          // tslint:disable-next-line:no-string-literal
        } else if (params['accessDenied']) {
          this.showMessage({ text: 'You should make login', type: 'warning' });
        }
      });


    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 60000);

  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authSevice.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage({ text: 'Invalid password', type: 'danger' });
          }
        } else {
          this.showMessage({ text: 'Invalid user', type: 'danger' });

        }

      })
  }

}
