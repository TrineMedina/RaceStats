## Race Stats

Race Stats provides the ability for a user to add/update/delete their triathlon race statistics, which are stored in a
postgres database.
Race Stats also offers data visualization in the form of charts which shows the time difference between different race
events.
Additional features that are currently in development are:
-Authentication
-Third-party API integration to show races local to the user
-Additional data analysis

Race Stats is created with:
JavaScript, React, MaterialUI, Chart.js, Node.js, Express, PostgreSQL, bcrypt, Jest, and SuperTest.

## Setup Notes

- Add a .env file in the root directory with a db URI: PG_URI

## Working On

- Add checks to ensure all race data for name, year and distances have been entered.
- Add integration and e2e testing for CRUD functionality
- Start working on chart / compare races view
- Set up login/authentication with JWT
- Research an alternative to DataGrid or find a different way to display the race table in mobile view

## Library / API notes

- For race API, use TriReg here https://www.trireg.com/api/EventSearchDoc.aspx. URL for Get request
  is http://www.TriReg.com/api/search

## Lessons learned

- MUI DataGrid only provides sticky columns option in the Pro version, so the current table is not mobile friendly at
  all.
