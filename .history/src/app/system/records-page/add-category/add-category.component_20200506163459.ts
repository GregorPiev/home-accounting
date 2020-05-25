import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categService: CategoriesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;
    this.categService.addCategory({name, capacity})
    .subscribe((category) => category);

  }

}
