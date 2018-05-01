# Angular-5-With-Bootstrap-4

### INSTALLING ANGULAR CLI
npm install -g @angular/cli

### CREATE A NEW APPLICATION
ng new eventmanager --style=scss
cd eventmanager
ng serve

### ADD BOOTSTRAP & BOOTSWATCH
npm install --save bootstrap
npm install --save bootswatch
src/styles.scss
@import "~bootswatch/dist/yeti/_variables.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootswatch/dist/yeti/_bootswatch.scss";

### ADDING FONT-AWESOME
npm install --save font-awesome
```
.angular-cli.json
{
  "apps": {
    "styles": [
      "styles.scss",
      "../node_modules/font-awesome/scss/font-awesome.scss"
    ],
    "addons": [
      "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
    ]
  }
}
```
### CREATING A HOME COMPONENT
ng g component home
```
/src/app/home/home.component.html
<div class="jumbotron">
  <h3>Welcome to the Event Manager!</h3>
</div>
```
### ADDING ROUTES FOR HOME COMPNENT
/src/app/app.module.ts
```
import { RouterModule } from '@angular/router';
@NgModule({
  ...
  imports: [
    ...
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  ...
})
```

### CREATE MAIN PAGE CONTENT
/src/app/app.component.html
```
<div class="container" style="margin-top: 10px;">
  <router-outlet></router-outlet>
</div>
```