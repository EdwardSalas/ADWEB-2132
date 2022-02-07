import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  studName="";
  subject="";
  prelim=0;
  midterm=0;
  final=0;
  average = (this.prelim+this.midterm+this.final)/3

  subject1="";
  prelim1=0;
  midterm1=0;
  final1=0;
  average1 = (this.prelim1+this.midterm1+this.final1)/3

}
