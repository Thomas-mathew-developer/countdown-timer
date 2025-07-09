import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DeadlineService } from '../deadline.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deadline-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadline-timer.component.html',
  styleUrl: './deadline-timer.component.scss'
})
export class DeadlineTimerComponent implements OnInit, OnDestroy {
  secondsLeft$ = new BehaviorSubject<number>(0);
  progressValue = 100;
  private subscription = new Subscription();

  constructor(private deadlineService: DeadlineService) { }

  ngOnInit() {
    const sub = this.deadlineService.getSecondsLeft().pipe(
      switchMap(initialSeconds => {
        const totalSeconds = initialSeconds;
        return timer(0, 1000).pipe(
          map(tick => {
            const remaining = totalSeconds - tick;
            this.progressValue = (remaining / totalSeconds) * 100;
            return Math.max(remaining, 0);
          })
        );
      })
    ).subscribe(secondsLeft => this.secondsLeft$.next(secondsLeft));

    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
