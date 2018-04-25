# QuitoSquare

## NOTE: You need add your own information on `environment.ts` file.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developing path
**Updating angularCLI:**

`npm uninstall -g @angular/cli`

`npm cache verify`

`npm install -g @angular/cli@latest`

**Installing angular maps**

`npm install @agm/core --save`. Follow installation guide at the web page [AGM](https://angular-maps.com/)

**Installing bootstrap**

`npm install bootstrap --save`

`npm install jquery popper.js --save`

**if needed add:**

`"styles": [`
`  "../node_modules/bootstrap/dist/css/bootstrap.min.css",`
`],`

`"scripts": [`
  `"../node_modules/jquery/dist/jquery.slim.min.js",`
  `"../node_modules/popper.js/dist/umd/popper.js",`
  `"../node_modules/bootstrap/dist/js/bootstrap.min.js"`
`]`


**Installing firebase at this** [github repo](https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md)

`npm install angularfire2 firebase --save`

**Installing LinkifyJS at this** [site](http://soapbox.github.io/linkifyjs/docs/)

`npm install linkifyjs`

### Deploying Project
**Installing Firebase tools**

`npm install -g firebase-tools`

**Build project for production**

`ng build`

`firebase login`

`firebase init`

` - ? What do you want to use as your public directory? dist`

` - ? Configure as a single-page app (rewrite all urls to /index.html)? Yes`

`- ? File dist/index.html already exists. Overwrite? No`

`firebase deploy`
