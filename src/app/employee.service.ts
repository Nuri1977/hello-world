import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployes() {
    return [
      {"id": 1, "name": "Andrew", "age": 30 },
      {"id": 2, "name": "Brendon", "age": 25 },
      {"id": 3, "name": "Christina", "age": 26 },
      {"id": 4, "name": "Elena", "age": 43 },
    ];
  }
}
