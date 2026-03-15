import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularExpressionLiteralExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p></p>


  <h1>Hello, {{name}}!</h1>
  <button (click) = "name = 'Angular'"> click here </button>
  <input #box placeholder = 'type anything' (input)="read(box.value)">
  <p>Current: {{current}}</p>
  <p>Length: {{box.value?.length}}</p>
  <p>long: {{lengthCheck(box.value?.length)}}</p>
  <p *ngIf="case" = "">Hello</p>
  <ul>
  <li *ngFor = "let item of items; index as i">{{ i }} - {{ item }}</li>
  </ul>
  `
})
class App {
  name = 'World';
  current = "";
  case = true;
  read(val: string) {
    this.current = val ?? "";
  }
  lengthCheck(val?: number){
    return(val ?? 0) > 10;
    return false;
  }
  items = ['a', 'b', 'c'];
}

bootstrapApplication(App);