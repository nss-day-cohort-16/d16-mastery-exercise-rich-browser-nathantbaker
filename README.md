## How to Run This Project

In the root folder, run `npm install`.

This will download dependencies, open [http://localhost:9966/webpack-dev-server/](http://localhost:9966/webpack-dev-server/) where the app will load in a few seconds, and boot up `webpack-dev-server` for you.

## Developement Environment
This app uses [Webpack](https://webpack.github.io/) to modularize code and automate tasks. NPM scripts are configured in the `package.json` file. They are being used so you can easily access commands of local node modules without having to install anything globally. Webpack is being configured in `webpack.config.js`.

### Webpack Dev Server
In this project, the Webpack Dev Server is configured to live-reload changes you make. It creates the latest version of the app on the fly, even though it does **not** compile code.
* **`npm start`** Start Webpack Dev Server and be send to the URL where the app loads
* **`npm stop`** Stop Webpack Dev Server
* **`npm restart`** Stop and then start Webpack Dev Server

### Compile Code
* **`npm run compile`** Compile once to see changes live reload in Webpack Dev Server
* **`npm run watch`** Compile continuously to see changes live reload in Webpack Dev Server

### Linting
`jshint` runs in the background and will halt watch functionality until code is lint free. You can supress specific errors across the project in the `js/.jshintrc` file.

# Toy Consignment Shop

You are going to create an application for a consignment store specializing in children's toys. Use Google image search to find some toys for your store.

## SASS Automation

You must use SASS to style your application. Using your automation tool of choice, set up a task to automate the transpilation of SASS to CSS for inclusion in your application.

## Firebase Structure

Create a new Firebase application. There will only be one collection, named `toys`.

### Toy Data

Each toy will need the following properties.

1. Name
2. Price
3. Image URL
4. Short description

## Views

You will need 3 views in this application. You must use Handebars to create templates for each view. Use jQuery to swap the views in and out of an entry point element in `index.html` when the user chooses to visit those sections of your app. Use Browserify to modularize and compile your JS.

### List all toys

When viewing all toys, provide a text box on the screen that will allow the user to filter the toys on the product name. Use Bootstrap for laying the toys out in a grid.

### View individual toy details

Create a basic view that shows the toy name as a title, the toy image, and the price. Ensure there is an affordance for the user to easily get back to the list of toys.

### Add / delete toy

Create a form for addding a new toy to Firebase. Make sure the form fields match the format you defined in your toys collection.

You will also need to add a button to each toy that allows the user to delete it from the list and from Firebase.

## Stretch goals
1. Add a form for editing a toy and saving the changes.
2. Create a form for registering/logging in a user.
3. When the signed-in user adds a toy to Firebase, save the user id to the toy.
4. Allow the user to view only toys he/she added to the db.


