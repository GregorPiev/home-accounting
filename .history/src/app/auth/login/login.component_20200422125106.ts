import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.showMessage('');
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
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

          } else {
            alert('Invalid password');
          }
        } else {
          this.showMessage('Invalid user');

        }

      })
  }

}
