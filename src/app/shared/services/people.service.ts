import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface IPessoa { firstName: string, lastName: string, age: number };

@Injectable({
    
  providedIn: 'root'
})

export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray:IPessoa [];

    peopleArray = [
      {
        firstName: 'Ivonaldo',
        lastName: 'Soares',
        age: 26
      },
      {
        firstName: 'Joao',
        lastName: 'Pereira',
        age: 26
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 26
      },
      {
        firstName: 'Marcio',
        lastName: 'Santos',
        age: 40
      },
    ]
    return of(peopleArray);
  }
}
