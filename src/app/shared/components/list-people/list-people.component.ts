import { Component, Input, OnInit } from '@angular/core';

interface IPessoa { firstName: string, lastName: string, age: number };

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})

export class ListPeopleComponent implements OnInit {
  @Input() list: IPessoa [] = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }  

}
