import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count: number  = 0;
  nome:string = "Paulo Eduardo";
  text:string = '';

  pessoas = [ 
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {    
    console.log(this.pessoas);
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if (this.count == 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome:string) {
    console.log('Clicou em min', nome);
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
