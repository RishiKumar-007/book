import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  constructor(private mathan:LoginService,private route:Router){}

  tableData: any = []

 
  ngOnInit() {
    this.mathan.table().subscribe(data => {
      this.tableData.push(data)
      console.log(data)
    },
      error => {
        console.log(error)
      })
  }

  edit(data: any) {
    console.log(data)
    this.route.navigateByUrl("/edit/" + data.title)
  }

  delete(data: any) {
    this.mathan.delete(data).subscribe((data) => {

      this.route.navigateByUrl("/home")
    },
      (error) => {
        console.log(error)

      }
    )
  }

  

}
