import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {

  firstNumber: number;
  secondNumber: number;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.initialValueFirst().subscribe(value => this.firstNumber = value)
    this.service.initialValueSecond().subscribe(value => this.secondNumber = value);
  }

  increase() {
    this.service.increase();
  }
  decrease() {
    this.service.decrease();
  }
  startStream() {
    this.service.start();
  }
  stopStream() {
    this.service.stopStr();
  }
  reset() {
    this.service.resetStr();
  }

}