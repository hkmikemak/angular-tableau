import { Component, ViewChild } from '@angular/core';
import { AngularTableauComponent } from 'angular-tableau';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="handleOnClick()">Show Download</button>

    <div class="container">
      <angular-tableau
        #dashboard1
        (loaded)="dashboardLoaded()"
        [hideToolbar]="true"
        [hideTabs]="true"
        src="https://public.tableau.com/views/COVID-19DailyDashboard_15960160643010/Overview"
      ></angular-tableau>

      <angular-tableau
        #dashboard2
        [hideToolbar]="true"
        [hideTabs]="true"
        src="https://public.tableau.com/views/PRIDE_16229892973240/PRIDE"
      ></angular-tableau>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      .container {
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
      }

      angular-tableau {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 90vw;
        border: 1px solid black;
      }
    `,
  ],
})
export class AppComponent {
  title = 'test-app';

  @ViewChild('dashboard1')
  Dashboard1!: AngularTableauComponent;

  async dashboardLoaded() {
    console.log('Start refresh');
    await this.Dashboard1.refreshDataAsync();
    console.log('Stop refresh');
  }

  async handleOnClick() {
    // console.log('Start refresh');
    // await this.Dashboard1.refreshData();
    // console.log('Stop refresh');
    this.Dashboard1.showExportImageDialog();
  }
}
