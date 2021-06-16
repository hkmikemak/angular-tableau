import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTableauModule, TABLEAU_API } from 'angular-tableau';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularTableauModule],
  providers: [
    {
      provide: TABLEAU_API,
      useValue:
        'https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
