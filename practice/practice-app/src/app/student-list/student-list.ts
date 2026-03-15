import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students = ['ali', 'dan', 'lily'];
  showList = true;
  toggleList(){
    this.showList = !this.showList;
  }
  imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";
  new_student = '';
}
