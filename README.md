## Lessons learned

- MUI DataGrid only provides sticky columns option in the Pro version, so the current table is not mobile friendly at
  all.

## Setup Notes

- Add a .env file in the root directory with a db URI: PG_URIn

## Todo Notes

- Add checks to ensure all race data for name, year and distances have been entered.
- Add integration and e2e testing for CRUD functionality
- Start working on chart / compare races view
- Set up login/authentication with JWT
- Research an alternative to DataGrid or find a different way to display the race table in mobile view

## Library / API notes

- Use chart.js & react-chartjs-2 - doc here: https://www.npmjs.com/package/react-chartjs-2 (vertical bar chart)
- For race API, use TriReg here https://www.trireg.com/api/EventSearchDoc.aspx. URL for Get request
  is http://www.TriReg.com/api/search
