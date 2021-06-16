import { TestBed } from '@angular/core/testing';
import { AngularTableauStartupService } from './angular-tableau.startup.service';
import { TABLEAU_API } from './angular-tableau.values';

describe('AngularTableauService', () => {
  let service: AngularTableauStartupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TABLEAU_API,
          useValue:
            'https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js',
        },
      ],
    });
    service = TestBed.inject(AngularTableauStartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
