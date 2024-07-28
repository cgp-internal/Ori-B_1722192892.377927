Setup Instructions
================

To set up this application, follow these steps:

1. Clone the repository using `git clone <repository_url>`
2. Install the dependencies using `npm install`
3. Start the application using `npm start`

Application Details
================

This is a simple 'Hello World' application built using Express.js. It sets up a single endpoint at '/' that returns 'Hello World' in plain text.

Deployment Guidelines for Heroku
=============================

To deploy this application to Heroku, follow these steps:

1. Create a new Heroku application using `heroku create`
2. Add the Git repository using `heroku git:remote -a <application_name>`
3. Push the code to Heroku using `git push heroku master`
4. Set the start command using `heroku ps:scale web=1`
5. Open the application using `heroku open`

Note: Make sure to update the `Procfile` with the correct start command for the application.