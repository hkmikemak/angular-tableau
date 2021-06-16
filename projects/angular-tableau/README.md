# Angular Tableau

Component for displaying Tableau dashboard in angular, wrapper of the official [Tableau JavaScript API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm)

## Features

- [x] Load dashboard
- [x] Refresh data
- [x] Display tableau dialogs
- [ ] Apply filters

## Usage/Examples

#### Basic Usage

app.module.ts

```typescript
import { AngularTableauModule } from "angular-tableau";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularTableauModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

app.component.html

```html
<angular-tableau
  src="https://public.tableau.com/views/PRIDE_16229892973240/PRIDE"
></angular-tableau>
```

#### Private tableau server

app.module.ts

```typescript
import { AngularTableauModule, TABLEAU_API } from "angular-tableau";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularTableauModule],
  providers: [
    {
      provide: TABLEAU_API,
      useValue:
        "https://private.tableau.com/javascripts/api/tableau-2.8.0.min.js",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Functions

app.component.html

```html
<angular-tableau
  #dashboard1
  src="https://public.tableau.com/views/PRIDE_16229892973240/PRIDE"
></angular-tableau>
<button type="button" (click)="handleRefreshButtonClick()">Refresh Data</button>
```

app.component.ts

```typescript
import { AngularTableauComponent } from "angular-tableau";

export class AppComponent {
  @ViewChild("dashboard1") Dashboard1: AngularTableauCompoment;

  async handleRefreshButtonClick() {
    console.log("Refresh data started");
    await this.Dashboard1.refreshDataAsync();
    console.log("Data refreshed");
  }
}
```

#### Events

app.component.html

```html
<angular-tableau
  #dashboard1
  (loaded)="handleLoaded()"
  src="https://public.tableau.com/views/PRIDE_16229892973240/PRIDE"
></angular-tableau>
```

app.component.ts

```typescript
import { AngularTableauComponent } from "angular-tableau";

export class AppComponent {
  @ViewChild("dashboard1") Dashboard1: AngularTableauCompoment;

  async handleLoaded() {
    console.log("Refresh data started");
    await this.Dashboard1.refreshDataAsync();
    console.log("Data refreshed");
  }
}
```

## API Reference

#### Attributes

| Attribute     | Type      | Default | Description                        |
| :------------ | :-------- | :------ | :--------------------------------- |
| `src`         | `string`  | ''      | **Required**. Url of the dashboard |
| `height`      | `string`  | '100%'  | Height of the container            |
| `width`       | `string`  | '100%'  | Width of the container             |
| `hideTabs`    | `boolean` | false   | Hide tabs                          |
| `hideToolbar` | `boolean` | false   | Hide toolbar                       |

#### Events

| Event    | Description                                           |
| :------- | :---------------------------------------------------- |
| `loaded` | Emit when dashboard first loaded (onFirstInteractive) |
