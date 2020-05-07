import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.initialValueFirst().subscribe(value => this.firstNumber = value)
    this.service.initialValueSecond().subscribe(value => this.secondNumber = value);
  }


}
