# Martian Robots

### Why I made some of decisions I did:
- Created a grid class to make it more extendable in the future
- Set the lost robots coordinates to their last known rather than changing to their “actual” position as it made life a little easier to output the info, however, it wouldn’t be much more effort to get the info from the lost scent instead.

### If I had more time I would
- Add react tests, I added the frontend quite late as a way to input the data
- Add spies to the tests (Sinon or similar)
- Create a front end interface to add input from
- Better tooling (test watcher, prettier/better linting, etc.)
- Cleaner conversion from strings to int
- Probably would have used a much smaller framework (or none at all) to render the frontend

## Running the app
- `yarn` will install the dependencies
- `yarn start` will start the server at [localhost:9000](http://localhost:9000)
- `yarn run test` will run the tests

optionally you can use NPM, in which case the steps would be:
- `npm install`
- `npm start`
- `npm run test`