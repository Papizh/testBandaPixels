import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { MainService } from '../service/main.service';
import { EMPTY } from 'rxjs';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let service: MainService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new MainService()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  // my test by karma
  it('should call initialValueFirst()', () => {
    const spy = spyOn(service, 'initialValueFirst').and.callThrough()
    expect(service.firstNumber).toBe(-5);
  })

  it('should call initialValueSecond()', () => {
    const spy = spyOn(service, 'initialValueSecond').and.callThrough()
    expect(service.secondNumber).toBe(10);
  })

  it('should increment by 1', () => {
    component.increase()
    expect(component.firstNumber).toBe(-4)
  })

  it('should decrese by 1', () => {
    component.decrease()
    expect(component.secondNumber).toBe(9)
  })

  it('should firstNumber and secondNumber be defould value ', () => {
    component.reset();
    expect(component.firstNumber).toBe(-5);
    expect(component.secondNumber).toBe(10);
  })

  // it('should increment by 1 firstNumber and decrese by 1 secondNumber', async () => {
  //   service.strFirstNum$.subscribe(value => {
  //   expect(value)
  //   })
  // })


});
