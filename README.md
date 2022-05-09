# Dog Saga

or

## Using Redux-Saga to Fetch Dog Pictures

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and makes minimal use of regular **Redux**. Rather, it focuses on how the **Saga** pattern enhances Redux to make the app flow easier and simpler to control.

![A Puppy!](https://hackernoon.com/_next/image?url=https%3A%2F%2Fhackernoon.com%2Fhn-images%2F1*sfQctxtPCylO7yTJwnhQwQ.jpeg&w=1920&q=75)
Source: [Redux-Saga tutorial for beginners and dog lovers](https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645)

## Installing

Just download, `npm install` and `npm start`. The app will open on your browser and it's front-end only.

## About Sagas

**Saga** is a pattern that has been around for quite some time. First proposed in 1987 by Hector Garcia-Molina and Kenneth Salem, it dealt at first exclusively with database transactions; more precisely, how to deal with long-lived transactions that you could not start and end in a very short time and thus guarantee them to be atomic.

The solution was to break large transactions down to smaller ones, and accept that they would come in a sequence. As soon as one of them failed, rather than revert the whole transaction at once (which at this point is understood is not possible anymore), each successfully completed transaction can be compensated, or undone, by a semantically equivalent one, that has the opposite effect.

Which brings us to...

### Redux-Saga

Redux-Saga aims to manage the _effect_ actions have when performed on the application. Redux by itself does a great job at managing state, but it can be cumbersome to fire several things that should happen from one action, either in sequence or at the same time, or following a certain interval. Enter the **Saga** pattern, which captures a regular Redux instruction and can do several things with it -- be it fetch some data, wait for the next call, or run some logic of its own.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. Code coverage is always collected into `src/coverage` folder.

#### **Known issues**

- MSW is not capturing network traffic, thus impairing some of the tests.

### `npm test:watch`

Launches the test runner in the interactive watch mode.\
Code coverage is always collected into `src/coverage` folder.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

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
