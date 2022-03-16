import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  employeeslist: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.employeeslist = this.service.emplist();
  }

}