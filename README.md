# Neighbour.ly: Front-end

## Overview
This is the front-end of Neighbour.ly, a communications app produced as part of our final two-week project of Makers Academy.

To see the Go back-end, [click here](https://github.com/ainsleybc/neighbourly).

Neighbour.ly was produced as part of a wider challenge to learn how to use Go without prior knowledge. To see a record of our learning process and how we came to build Neighbour.ly, [click here](https://github.com/haletothewood/LearningGoAndReact)

## Authors

- David Halewood
- Alexis Carlier
- George Lamprakis
- Jon Sanders
- Lucas Salmins
- Ainsley Chang

## Instructions

### Setup

```
$ git clone git@github.com:alexiscarlier/neighbourly-app.git
$ cd neighbourly-app
$ npm install
```

Ensure create-react-app is installed globally:

```
$ npm install -g create-react-app
```

### Running Tests

```
$ npm test
```

### Serve App Locally

```
$ npm start
```

To simulate the server's response, you can use the [Kaazing WebSocket Echo Demo](http://demos.kaazing.com/echo/). In `./src/socket.js`, replace the local host address string with 'ws://demos.kaazing.com/echo'.

## Technologies used

#### ReactJS
Cient-side JavaScript framework

## File Manifest

```
|-- neighbourly-app
    |-- .babelrc
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- yarn.lock
    |-- __mocks__
    |   |-- react.js
    |-- __test__
    |   |-- FeedContainer.test.js
    |   |-- Signup.test.js
    |   |-- feed.test.js
    |   |-- socket.test.js
    |-- coverage
    |   |-- clover.xml
    |   |-- coverage-final.json
    |   |-- lcov.info
    |   |-- lcov-report
    |       |-- base.css
    |       |-- index.html
    |       |-- prettify.css
    |       |-- prettify.js
    |       |-- sort-arrow-sprite.png
    |       |-- sorter.js
    |       |-- src
    |       |   |-- Feed.js.html
    |       |   |-- FeedContainer.js.html
    |       |   |-- Signup.js.html
    |       |   |-- index.html
    |       |   |-- socket.js.html
    |       |-- test
    |           |-- index.html
    |           |-- jestsetup.js.html
    |-- public
    |   |-- NeighbourlyLogoSquare.png
    |   |-- index.html
    |   |-- manifest.json
    |-- src
    |   |-- App.css
    |   |-- App.js
    |   |-- Feed.js
    |   |-- FeedContainer.js
    |   |-- Signup.js
    |   |-- index.css
    |   |-- index.js
    |   |-- logo.svg
    |   |-- registerServiceWorker.js
    |   |-- socket.js
    |-- test
        |-- jestsetup.js
```
