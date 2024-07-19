import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private route: ActivatedRoute, private loginser: LoginService, private routepath: Router) { }
  id: any;
  formValues: any = []
  editForm: any
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.loaddata()
    this.editForm = new FormGroup({
      _id: new FormControl(""),
      title: new FormControl(""),
      isbn: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl(""),
      published_date: new FormControl(""),
      publisher: new FormControl(""),
      

    });
    console.log(this.formValues)
  }

  loaddata() {
    this.loginser.table().subscribe((data:any) => {
      console.log(data)
      data.forEach((element: any) => {
        if (element.title === this.id) {
          this.formValues.push(element)
        }

      });

    },

      (error: any) => {

      }
    )
  }
  onSubmit() {
    console.log(this.editForm.value)
    this.loginser.update(this.editForm.value).subscribe((data:any) => {
      console.log(data)
      this.routepath.navigateByUrl("/table")
    })

  }


  

}
