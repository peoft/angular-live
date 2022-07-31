import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

interface IPessoa { firstName: string, lastName: string, age: number };

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})

export class ListPeopleComponent implements OnInit {
  pessoas: IPessoa  [] = [ 
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }  

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
