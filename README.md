# Project Time Tracker

This is a simple web application that allows you to track the time you spend working on a project. You can add a new project to the overview and start the timer by clicking on the start button. Even if you close your browser, the timer will keep running and only stop when you press the stop button in the overview. The time information is saved in a MongoDB database for persistence.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Open the index.html file in your browser.
3. Click on the "Add Project" button to create a new project.
4. Click on the "Start" button to start the timer for the project.
5. Close your browser and the timer will keep running.
6. When you're ready to stop the timer, open the index.html file again and click on the "Stop" button in the overview.

## Features

- Add a new project to the overview
- Start the timer for a project
- Stop the timer for a project
- Automatically track the time spent on a project even if the browser is closed
- Store time information in a MongoDB database for persistence

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- MongoDB

# To-Do List

# Roadmap

1. Plan out the project requirements and user interface
   - Dashboard
     1. Project Overview : List of Projects
        - [ ] Card component
          - [ ] Name of project, time passed, start/pause and stop button
     2. Add new project button
        - [ ] opens a form to input name of project
2. Set up a development environment
   - BACKEND
     - [x] Node.js
     - [x] MongoDB
   - FRONTEND
     - [x] React
3. Create a new Node.js project and install the necessary dependencies
   - [x] Express.js
   - [x] Express - Validator
   - [x] Cors
   - [ ] Nodemon
   - [x] DOTENV
   - [x] MongoDB
   - [x] .gitignore
   - [x] .env file
   - [x] .env-sample
4. Set up a MongoDB database and create a collection for project time data and .env file
   - [x] db.js file
   - [x] config.js file for env
5. Create a server-side API to handle CRUD operations for project time data
   - [x] set up server
   - [x] add body-parser
   - [x] set up routes
     - [x] create project
     - [x] delete project
6. Implement the client-side user interface using React
   - [x] create vite app
   - [x] add dashboard page
   - [ ] BONUS: Add a Login and Register page for different users
7. Add functionality to start and stop a timer for a project
   - [x] start timer functionality
   - [x] stop timer functionality
8. Implement logic to track the time spent on a project even if the browser is closed
9. Add validation to the project name field to prevent invalid entries
   - [ ] Add validation to the project name field
10. Improve the user interface of the overview to make it more user-friendly
11. Store project time information in a MongoDB database for persistence
12. Add the ability to delete a project from the overview
13. Add the ability to edit a project name
