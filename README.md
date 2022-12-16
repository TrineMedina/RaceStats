## Setup Notes

- Add a .env file in the root directory with a db URI: PG_URI

## Todo Notes

- Complete update functionality, incl. updating state after confirmed db write
- Add checks to ensure all race data has been entered
- Look at DataGrid footer -> remove < >
- Add integration and e2e testing for CRUD functionality
- Start working on chart / compare races view
- Set up login/authentication with JWT

## Library / API notes

- Use chart.js & react-chartjs-2 - doc here: https://www.npmjs.com/package/react-chartjs-2
- For race API, use TriReg here https://www.trireg.com/api/EventSearchDoc.aspx. URL for Get request
  is http://www.TriReg.com/api/search
