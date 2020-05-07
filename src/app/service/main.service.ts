import { Injectable } from '@angular/core';
import { Observable, Subject, merge, Subscription, BehaviorSubject, interval } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  firstNumber = -5;
  secondNumber = 10;
  sub: Subscription

  strFirstNum$ = new BehaviorSubject(this.firstNumber);
  strSecondNum$ = new BehaviorSubject(this.secondNumber);
  sub$: Subscription;

  constructor() { }

  initialValueFirst() {
    return this.strFirstNum$.asObservable();
  }

  initialValueSecond() {
    return this.strSecondNum$.asObservable();
  }
  increase() {
    this.firstNumber++;
    this.strFirstNum$.next(this.firstNumber);
  }

  decrease() {
    this.secondNumber--;
    this.strSecondNum$.next(this.secondNumber);
  }
  start() {

    const firstStream = interval(2000).pipe(
      tap(() => this.strFirstNum$.next(this.firstNumber++))
    );
    const secondStream = interval(1000).pipe(
      tap(() => this.strSecondNum$.next(this.secondNumber--))
    );
    this.sub$ = merge(firstStream, secondStream)
      .subscribe(val => console.log(val))
  }

  stopStr() {
    this.sub$.unsubscribe();
  }
  setDefaultValue() {
    this.firstNumber = -5;
    this.secondNumber = 10;
    this.strFirstNum$.next(this.firstNumber);
    this.strSecondNum$.next(this.secondNumber);
  }
  resetStr() {
    this.stopStr();
    this.setDefaultValue();
  }

}