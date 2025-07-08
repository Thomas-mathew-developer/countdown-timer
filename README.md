# 📸 Angular Deadline Timer App

This project is a lightweight Angular 17 application built as part of an initial technical assessment.  
It demonstrates working with Angular services, RxJS observables, reactive countdown timers, and clean UI design using pure SCSS — without any external UI libraries.


## 📌 Features

- Fetches remaining seconds to a deadline from a mocked API endpoint.
- Displays a dynamic countdown timer that updates every second.
- Clean, modern UI built using pure SCSS (no Angular Material or Bootstrap).
- Optimized RxJS implementation using `timer`, `BehaviorSubject`, and `switchMap`.
- Safe unsubscribe on component destruction to prevent memory leaks.
- Mock API integration using [Mocki.io](https://mocki.io) for testing.


## 🚀 How to Run This Project

### 1️⃣ Install Angular CLI (if not already)

```bash
npm install -g @angular/cli@17
