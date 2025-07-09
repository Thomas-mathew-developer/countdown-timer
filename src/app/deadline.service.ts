import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  constructor(private http: HttpClient) {}

  // '/api/deadline' API to be used in the working. Now I have mocked the data to a public API to test it
  getSecondsLeft(): Observable<number> {
    return this.http
      .get<{ secondsLeft: number }>('https://mocki.io/v1/aec8d91d-a568-496a-8d9c-2687693fe686')
      .pipe(map((response) => response.secondsLeft));
  }

  // getSecondsLeft(): Observable<number> {
  //   // Send a static value for testing
  //   return of(90); // 90 seconds left
  // }
}
