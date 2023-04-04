# Book Search Engine Starter Code

## Description

In this project, I was tasked with migrating an existing book search application to use Apollo Server and GraphQL, away from using a RESTful API. This app was built with a MERN stack, so it uses MongoDB for the database, Express.js (with Node.js) to help serve the back end, and React to help create the front end.

## Table of Contents
[Install](#install)
[Overview](#overview)
[Screenshots](#screenshots)
[Links](#links)

## Install
If you want to run the application locally, follow these steps:
To install the application, you will need to install the required npm packages for the project by running 'npm i' in a command line terminal.
After the install is complete, run 'npm run build' and then 'npm start' to start the application at `http://localhost:3001`.

## Overview

 - For this project, I changed the application from running with a RESTful API to run a GraphQL API through creating an Apollo Server.
 - I had to create typeDefs, resolvers, and mutations to query the data properly for GraphQL to read correctly. These queries work by importing the specific query and applying it to the data before it is passed to GraphQL.
 - I had to refactor the authentication files since RESTful API and GraphQL API use different data context. I was able to get the application to successfully signup and login a user, as well as save and delete books from a user's account. These actions were not working correctly when initially switching over to GraphQL.
 - I also set up an Apollo Provider so data would be sent to the Apollo Server correctly.

## Screenshots

<img src="">
<img src="">

## Links

-Github link: https://github.com/JacobYaws/Book-Search-Engine

    -To download, navigate to the repository and click on the green 'Code' button. Copy the ssh link and clone it in a terminal by using 'git clone git@github.com:JacobYaws/Book-Search-Engine.git'

-Deployed site link: https://serene-meadow-41358.herokuapp.com