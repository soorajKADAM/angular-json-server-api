import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {}
  createStudent(student){
    return this._http.post("http://localhost:3000/students",student)
  }

  getStudent(){
    return this._http.get("http://localhost:3000/students")
  }

  deleteStudent(student){
    return this._http.delete("http://localhost:3000/students/" + student.id);
  }

  updateStudent(student){
    return this._http.put("http://localhost:3000/students/" + student.id,student)
      }
}


