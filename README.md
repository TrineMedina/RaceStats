## Setup Notes

- Add a .env file in the root directory with a db URI: PG_URI

## Todo Notes

- Complete update functionality, incl. updating state after confirmed db write
- Add required to Autocomplete -> this will ensure fields are completed for new races
- Split addRace into race, addRace and editRace components
- Move creation of body for API call to its own file to be called in addRaceAPI and updateRaceAPI
- Look at DataGrid footer -> remove < >
- Add integration and e2e testing for CRUD functionality
- Start working on chart / compare races view
- Set up login/authentication with JWT

## Library / API notes

- Use chart.js & react-chartjs-2 - doc here: https://www.npmjs.com/package/react-chartjs-2
- For race API, use TriReg here https://www.trireg.com/api/EventSearchDoc.aspx. URL for Get request
  is http://www.TriReg.com/api/search
