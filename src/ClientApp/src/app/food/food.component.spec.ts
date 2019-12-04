import { TestBed, ComponentFixture, async } from '@angular/core/testing'
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { FoodComponent } from './food.component';
import { FoodService } from './food.service';

describe('FoodComponent', () => {

  let fixture: ComponentFixture<FoodComponent>;
  let component: FoodComponent
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    let foodService = jasmine.createSpyObj('foodService', ['getFoods']);

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        NoopAnimationsModule,
        SharedModule
      ],
      declarations: [FoodComponent],
      providers: [{provide: FoodService, useValue: foodService}]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should call getFood OnInit', () => {
    let foodService = TestBed.get(FoodService);
    foodService.getFoods.and.returnValue(of([]));

    fixture.detectChanges();

    expect(foodService.getFoods).toHaveBeenCalled();
  });

  it('should have a title of Food', () => {
    expect(element.querySelector('h2').innerText).toBe('Food');
  });

  it('should render an expansion panel for each food', () => {
    let foodService = TestBed.get(FoodService);
    foodService.getFoods.and.returnValue(of([{}, {}]));

    fixture.detectChanges();

    expect(element.querySelectorAll('mat-expansion-panel').length).toBe(2);
  });
});
