# Totally not Minesweeper

That should speak for itself in regards to what this is.
In more detail, this is a front end React application that creates and renders minesweeper boards, sends the data to a corresponding back end server, and allows you to play the game based off communication between the two. This front end can be accessed [here](https://flubbsweeper-front-end.herokuapp.com). [Trello Board for project](https://trello.com/b/tAFdrB7j/seir-project-3-minesweeper)

NOTE: THIS WEBAPP IS AN EXTREME WORK IN PROGRESS AND SHOULD BE CONSIDERED IN A VERY EARLY ALPHA STATE.

![Board on Generation](https://cdn.discordapp.com/attachments/549737150111809546/832424416369311834/unknown.png)

![Board demonstrating revealed and marked tiles](https://cdn.discordapp.com/attachments/549737150111809546/832428241960697856/unknown.png)

## Technologies used
1. HTML
1. CSS
1. Javascript
1. React
1. Material-UI
1. Cors

#### Dependencies
1. Cors
1. @material-ui/core
1. @testing-library/jest-dom
1. @testing-library/react
1. @testing-library/user-event
1. cors
1. react
1. react-dom
1. react-scripts
1. web-vitals

## Getting started

Clone this repo down, along with the corresponding [back-end](https://github.com/piemonke/SEIR-Project-3-Minesweeper-Back-End). You will need to modify a few variables in order to get functionality in a testing environment. For this, the front end, you should modify any fetch() request to have a URI of "http://localhost:3001" instead of "https://flubbsweeper-front-end.herokuapp.com". To enter the testing environment, run the command "npm start" in the CLI for both this repo and the back end repo.

## Known Issues

There are, quite a few. As of current, there are no win or lose conditions for the game. Additionally, data for each individual tile is being passed down to each tile on render. This is only supposed to happen after a tile has been revealed, but that feature has yet to be implemented.

## Future Enhancements
1. Win Condition
1. Lose Condition
1. Different Difficulties w/ difficulty selector
1. Delete board from back-end on win/loss
1. Timer
1. Saving board's database id in local storage so that you can leave or refresh the page without generating a new board
1. Scoreboard with best times and names
1. Improvements to mine placement generation
2. Gen mines on first selected tile so that players never open by clicking on a mine
2. Smarter placement algorithm that doesn't generate 50-50 guesses

# React Stuff
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
