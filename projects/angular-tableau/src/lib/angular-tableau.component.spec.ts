import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularTableauComponent } from './angular-tableau.component';

describe('AngularTableauComponent', () => {
  let component: AngularTableauComponent;
  let fixture: ComponentFixture<AngularTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularTableauComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.hideTabs = true;
    component.hideToolbar = true;
    component.src =
      'https://public.tableau.com/views/COVID-19DailyDashboard_15960160643010/Overview';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
