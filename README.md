# Deborah Kurata's famous Acme Product Management (APM) Angular demonstration application

(with a few "opinionated upgrades" by Fred Morrison)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1 and populated with pieces of Deborah Kurata's famous APM application code.

## Pluralsight Course Information

[Angular Getting Started](https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m3&clip=7&mode=live)

[Course Discussion](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

[Problem Solver](https://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/)

[Deborah's GitHub repo](https://github.com/DeborahK/Angular-GettingStarted)

## Changes I made to Deborah's original course files

- upgrade to latest Angular
- Switch from CSS to SCSS for styling. You can see this mostly within file `styles.scss` where styles are imported.
- Added `<ng-container>` directives inside certain .component.html files to provide a clean separation of `ngFor` and `ngIf` logic from the rest of the html they control.
- Use `ExtraOptions` when defining routes so that I can change `enableTracing` to `true` when I need to find out why my routes are not working.
- Got rid of weird warning when looking at file `angular.json` by changing all `APM` to `apm` inside that file. It seems that Angular or maybe tslint does not like capital letters for Angular project names when specified inside `angular.json`.
- added `.npmrc` with `package-lock=false` to suppress creation of `package-lock.json`
- added .npmrc to suppress creation of `package-lock.json` because I don't like using package locks for training/demo projects.
- In module 13, I split out the routing into separate modules. It was discussed in the video, but there was no demonstration for it, so you'll have to trust that I implemented it correctly in files `app-routing.modules.ts` and `product-routing.modules.ts`.
