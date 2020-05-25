import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
       console.log(form.value);
  }
}
