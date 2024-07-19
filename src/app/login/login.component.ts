import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,BrowserAnimationsModule,
    ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

BooksForm :any

  constructor(private rishi:LoginService,private route:Router, private toastr: ToastrService){}

  
  ngOnInit(){
    this.BooksForm = new FormGroup({
      title: new FormControl('',Validators.required),
      isbn: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      published_date: new FormControl('',Validators.required),
      publisher: new FormControl('',Validators.required),

    })
  }


  Books(){
    this.rishi.Books(this.BooksForm.value).subscribe(data=>{
      this.route.navigateByUrl('/table')
      this.toastr.success('Sucess')
        console.log(data)
    },error=>{
      this.toastr.error('error')
      console.log(error)
    })
  }

}
