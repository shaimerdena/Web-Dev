import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(){
    return ["Ali","Dana","Aruzhan"];
  }

}