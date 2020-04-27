# Deborah Kurata's famous Acme Product Management (APM) Angular demonstration application

(with a few "opinionated upgrades" by Fred Morrison)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1 and populated with pieces of Deborah Kurata's famous APM application code.

## Pluralsight Course Information

[Angular Getting Started](https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m3&clip=7&mode=live)

[Course Discussion](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

[Problem Solver](https://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/)

## Changes I made to Deborah's original course files

- upgrade to latest Angular
- Switch from CSS to SCSS for styling
- Added `<ng-container>` directives inside certain .component.html files to provide a clean separation of `ngFor` and `ngIf` logic from the rest of the html they control.
- Use `ExtraOptions` when defining routes so that I can change `enableTracing` to `true` when I need to find out why my routes are not working.
