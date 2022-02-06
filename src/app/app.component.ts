import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = "This is an one-way data binding example";
  logInName = 'admin';
  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 11;
  n2 = 20;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

//property binding

clientName:string ="Ed";

//style binding
appliedCSSClass= "green";
notappliedCSSClass=false;
myColor="violet";

//two-way data binding
showData($event:any){
  console.log("Button is Clicked!");

}
//keyup function
getData(data:any){
  console.warn(data)
}

isLogin:boolean=false;
isLogout:boolean=true;

// ngFor

list = [1,2,3,4,5];

// array

studentArr: any[] = [{
  "id": 1,
  "name": "student1"},
  {"id": 2,
  "name": "student2"},
  {"id": 3,
  "name": "student3"},
  {"id": 4,
  "name": "student4"}];
  trackByData(index:number, studentArr:any):number{
    return studentArr.id;
  }


users = [
  {firstName: 'Zack', lastName: 'Salas', email: 'zsas@gmail.com', role: 'User'},
  {firstName: 'Ed', lastName: 'Puno', email: 'epuno3@gmail.com', role: 'User'},
  {firstName: 'Mhark', lastName: 'Canlas', email: 'm.las@gmail.com', role: 'User'},
  {firstName: 'Marvin', lastName: 'Isidro', email: 'is2dm@gmail.com', role: 'Admin'},
  {firstName: 'Jonas', lastName: 'Lalid', email: 'lalid11@gmail.com', role: 'user'}
];

constructor() { }
  ngOnInit(): void {

  }
}
