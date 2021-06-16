import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'angular-tableau',
  template: `<div #vizContainer class="vizContainer"></div>`,
  styles: ['.vizContainer{ width: 100%; height: 100%; }'],
})
export class AngularTableauComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  @ViewChild('vizContainer', { static: false })
  private vizContainer!: ElementRef;
  private tableauViz: any = null;

  @Input() height: string = '100%';
  @Input() hideTabs: boolean = false;
  @Input() hideToolbar: boolean = false;
  @Input() src: string = '';
  @Input() width: string = '100%';

  @Output() loaded = new EventEmitter<undefined>();

  constructor() {}

  private cleanupTableau(): void {
    if (this.tableauViz) {
      this.tableauViz.dispose();
      this.tableauViz = null;
    }
  }

  private initializeTableau(): void {
    this.cleanupTableau();

    if (!this.src) return;
    if (!this.vizContainer) return;

    this.tableauViz = new tableau.Viz(
      this.vizContainer.nativeElement,
      this.src,
      {
        hideTabs: this.hideTabs,
        hideToolbar: this.hideToolbar,
        height: this.height,
        width: this.width,
        onFirstInteractive: () => {
          this.loaded.emit();
        },
      }
    );
  }

  ngOnDestroy(): void {
    this.cleanupTableau();
  }

  ngOnChanges(): void {
    this.initializeTableau();
  }

  ngAfterViewInit(): void {
    this.initializeTableau();
  }

  refreshDataAsync(): Promise<void> {
    if (this.tableauViz && this.tableauViz.refreshDataAsync) {
      return this.tableauViz.refreshDataAsync() as Promise<void>;
    } else {
      return Promise.resolve();
    }
  }

  showDownloadWorkbookDialog(): void {
    if (this.tableauViz && this.tableauViz.showDownloadWorkbookDialog) {
      this.tableauViz.showDownloadWorkbookDialog();
    }
  }

  showExportImageDialog(): void {
    if (this.tableauViz && this.tableauViz.showExportImageDialog) {
      this.tableauViz.showExportImageDialog();
    }
  }

  showExportPDFDialog(): void {
    if (this.tableauViz && this.tableauViz.showExportPDFDialog) {
      this.tableauViz.showExportPDFDialog();
    }
  }

  showExportPowerPointDialog(): void {
    if (this.tableauViz && this.tableauViz.showExportPowerPointDialog) {
      this.tableauViz.showExportPowerPointDialog();
    }
  }

  showExportDataDialog(): void {
    if (this.tableauViz && this.tableauViz.showExportDataDialog) {
      this.tableauViz.showExportDataDialog();
    }
  }

  showExportCrossTabDialog(): void {
    if (this.tableauViz && this.tableauViz.showExportCrossTabDialog) {
      this.tableauViz.showExportCrossTabDialog();
    }
  }

  showShareDialog(): void {
    if (this.tableauViz && this.tableauViz.showShareDialog) {
      this.tableauViz.showShareDialog();
    }
  }
}
