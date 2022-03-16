import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  employeeslist: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.employeeslist = this.service.emplist();
  }

}