# WisePops Frontend Test

## Requirements

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)

## Basics

WisePops is on a mission to provide marketers with the best tool to create popups.

In this exercise, we'll test your React skills by creating a simple WisePops clone.

The project is already setup in this repository so to start, fork it and when
you are done invite @clmntgr, @boris-hocde and @hmatthieu to collaborate on it.

Don't spend more than 4 hours on this test.

## Steps

For each step that follows you will have to edit some files already provided,
but don't hesitate to go further. Also, it will be great if you split your
steps using branches or commits.

Don't hesitate to over-engineer the problem a bit, so we will be able to see
how you will work, split and organize your file on a real project.

``` sh
# Install dependencies
yarn

# Start API & Dev server
yarn start
```

### 1. Show a static popup on `/demo` page

Go to [Demo.tsx](src/pages/Demo.tsx) file and fill `Demo` component to show
an overlay that contains the message stored in `popup` variable.

This page can be seen on http://localhost:8000/demo

### 2. Fetch popup from a fake REST API

Go to [popup.ts](/src/lib/popup.ts) file and replace `getPopup` function
body to fetch popup definition from http://localhost:8001/popup instead.

This will imply some change on `Demo` component too.

### 3. Edit the popup on `/popup` page

Go to [Popup.tsx](/src/pages/Popup.tsx) file and fill `Popup` component to
be able to edit a Popup definition. For information we use
[json-server](https://github.com/typicode/json-server) as a fake API server
so you will be able to persist change on this API.

### 4. Only show the popup on a specific situation

On a real use case, we don't want to show the popup each time a user visit
the page so adapts the code to show the popup only on these conditions:

* First visit
* Visitor is using a mobile
* Visitor speak English
* Visitor is in France

For this one you are free to implement it the way you want.

### 5. Create an UMD bundle to distribute demo script on the web

Use [webpack](https://webpack.js.org/) to create an UMD bundle so we should
be able to load the demo script like that:

``` js
(function () {
  const scriptElement = document.createElement("script");
  scriptElement.src = "http://localhost:8000/demo.js";
  scriptElement.onload = function () {
    WisePops.start();
  };
  document.body.appendChild(scriptElement);
})()
```

For this step you will need to:

- Add a webpack configuration
- Create a `demo.ts` file that will be the entry point of the webpack configuration
- Add a webserver to serve the `demo.js` bundle


### Solution to task 5
To test the UMD bundle:
- Build project with `yarn build`
- Run `yarn test:bundle`
- Open a new terminal and run `yarn open:test` to view the test webpage
