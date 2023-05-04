# Project Time Tracker

This is supposed to be a simple little web application that allows you to track the time you spend working on a project.
You can add new projects to the overview and start the timer by clicking on the start button. Even if you close the browser the timer will keep running until you reopen the browser and press the pause button.
For now only the total amount of time is displayed.

## Features

- Add a new project to the overview
- Remove project from overview
- Start the timer for a project
- Stop the timer for a project
- Automatically track the time spent on a project even if the browser is closed
- Store session-information in a MongoDB database

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- MongoDB

## **To**-Do List

1. Plan out the project requirements and user interface
   - Dashboard
     1. Project Overview : List of Projects
        - [x] Card component
          - [x] Name of project, time passed, start and stop button
     2. Add new project button
        - [x] opens a input field to enter name of project
        - [ ] BONUS: add send on keypress enter function
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
   - [ ] Nodemon -> used --watch
   - [x] DOTENV
   - [x] MongoDB
   - [x] .gitignore
   - [x] .env-file
   - [x] .env-sample
4. Set up a MongoDB database and create a collection for project time data and .env file
   - [x] db.js file
   - [x] config.js file for .env
5. Create a server-side API to handle CRUD operations for project time data
   - [x] set up server
   - [x] add body-parser
   - [x] set up routes
     - [x] create project
     - [x] delete project
     - [x] update session times
     - [ ] edit project name
6. Implement the client-side user interface using React
   - [x] create vite app
   - [x] add dashboard page
   - [ ] BONUS: Add a Login and Register page for different users
7. Add functionality to start and stop a timer for a project
   - [x] start timer functionality
   - [x] stop timer functionality
8. Implement logic to track the time spent on a project even if the browser is closed
   - [x] logic to keep running time even if browsers is closed
9. Add validation to the project name field to prevent invalid entries
   - [ ] Add validation to the project name field
10. Improve the user interface of the overview to make it more user-friendly
    - [ ] work on CSS styles
11. Store project time information in a MongoDB database for persistence with following schema
    ```json
    {
       project_name: "Project Name",
       sessions:[
           {session_id: 0, start: [date], end: [date]},
           {session_id: 1, start: [date], end: [date]},
           {session_id: 2, start: [date], end: [date]},
       ]
    }
    ```

## Authentification and Authorization

### LOGIN

- [x] create routes for login
- [x] create middleware to verify user
- [x] create middleware to encrypt password
- [x] create token functionality to save in cookies
- [x] install cookieparser
- [ ] implement login validation
- [ ] create login component

### REGISTER

- [x] create routes for register
- [x] create validation schema for register
- [ ] create register component

### Additional Features:

- [ ] Weekly view of how much user worked on a project
- [ ] Additional function to add notes to each session - maybe what was done in said session
- [ ] Pretty timer with circular animation ?
