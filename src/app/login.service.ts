import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  Books(data:any){
    return this.http.post("http://localhost:8082/api/books",data)
  }

  table(){
    return this.http.get("http://localhost:8082/api/books")
  }

  
  update(data: any) {
    return this.http.put("http://localhost:8082/api/books/" + data._id, data)

  }

  delete(data: any) {
    return this.http.delete("http://localhost:8082/api/books/" + data._id, data)

  }
}

