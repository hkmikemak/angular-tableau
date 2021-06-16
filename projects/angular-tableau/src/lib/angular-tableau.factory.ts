import { AngularTableauStartupService } from './angular-tableau.startup.service';

const loadScript = (startupService: AngularTableauStartupService) => {
  return () => startupService.importScript();
};

export { loadScript };
