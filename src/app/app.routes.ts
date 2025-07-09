import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DeadlineTimerComponent } from './deadline-timer/deadline-timer.component';

export const routes: Routes = [
    { path: 'countdown', component: DeadlineTimerComponent }
];
