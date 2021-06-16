import { Inject, Injectable } from '@angular/core';
import { TABLEAU_API } from './angular-tableau.values';

@Injectable({
  providedIn: 'root',
})
export class AngularTableauStartupService {
  constructor(@Inject(TABLEAU_API) private tableau_api: string) {}

  public importScript: () => Promise<void> = () =>
    new Promise<void>((resolve, reject) => {
      console.log(`Import script started`, this.tableau_api);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.tableau_api;

      script.onload = () => {
        console.log(`Import script started`, this.tableau_api);
        resolve();
      };

      script.onerror = (error: any) => {
        reject(error);
      };

      document.getElementsByTagName('head')[0].appendChild(script);
    });
}
