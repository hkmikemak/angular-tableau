import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularTableauComponent } from './angular-tableau.component';
import { loadScript } from './angular-tableau.factory';
import { AngularTableauStartupService } from './angular-tableau.startup.service';
import { TABLEAU_API } from './angular-tableau.values';

@NgModule({
  declarations: [AngularTableauComponent],
  imports: [],
  exports: [AngularTableauComponent],
  providers: [
    {
      provide: TABLEAU_API,
      useValue:
        'https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js',
    },
    {
      provide: AngularTableauStartupService,
      useClass: AngularTableauStartupService,
      deps: [TABLEAU_API],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadScript,
      deps: [AngularTableauStartupService],
      multi: true,
    },
  ],
})
export class AngularTableauModule {}
