import { TestBed, async } from '@angular/core/testing';
import { BWatchComponent } from './bwatch.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BWatchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BWatchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BWatch'`, () => {
    const fixture = TestBed.createComponent(BWatchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BWatch');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BWatchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to BWatch!');
  });
});
