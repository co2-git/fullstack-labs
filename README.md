FullStack Labs - Coding Challenge
===

# Install

```bash
npm install co2-git/fullstack-labs
```

# Build

Build is automatic after installing. Yet you can invoke it again like this:

```bash
npm run build
```

# HTTP Server

App will broadcast at port 3000 by default, but you can set a different port using a `PORT` environment variable.

```bash
npm start
```

# Stack

- `express-emitter` For HTTP server
- `babel` For transpiling the app/ folder into ES5 in the dist/ folder
- `webpack` For compiling assets
- `bootstrap` For UI
- `React` for Front-End

# Note

## React

For this example and for simplicity's sake, I am **not** using isomorphic React - just React on the Front-End.

===

For this code challenge you will be building a web application with a simple set of features.  You can build the application using the following combinations of technologies.  You must choose one of the following from each level of the stack. (i.e Rails/Ember/Bootstrap).  You can include other technologies that you think will be useful to you but this will factor into our assessment of the overall project as well.

Acceptable stack:
Server Framework
Rails
Node/Express
JS Framework
React
Ember
Angular
UI Framework
Bootstrap

The coding challenge is to create an application where a user will be able to fill out a multipart form describing their household, the people that live in the household and the vehicles that each person owns.

The first view of the wizard form will be to enter in household info with the following fields:
address
zip
city
state
number_of_bedrooms

The next button should take you to a view to add people to the household

This form should have the following fields:
first_name
last_name
email
age
gender

There should now be an option to add another person (which will be the same person form) or move to the next step.

The next step in the form will be adding vehicles to the household and associating them to a specific person.

The form should have the following fields:
make
model
year
license_plate

You should also have the ability to associate a person that was added in the previous step to a car.

You should be able to add additional cars or hit next.

If you hit next then you will be taken to a summary screen which will show all of your models with the attributes that have been added so far.  You should be able to save all of these records at this point.

The records must be saved with proper associations:
Household has many people and vehicles
People have many vehicles

Keep in mind FullStack Labs highly values attention to detail and clean code that is easy to understand at a glance.

Other notes:

You may add additional bonus features such as auth, ability to save partial submissions and others but this is not required.

Please commit early and often.  We will need to see commits as the application is built to know that you were actually building it.
