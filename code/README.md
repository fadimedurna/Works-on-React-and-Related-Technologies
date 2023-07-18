# Meetup App

The Meetup App is a web application built with React and utilizes the authentication features of react-router-dom and its hooks. This app allows users to create and manage meetups, seeing existing meetups, and learning informations about the specific meetup.

## Features

- User authentication: Users can sign up, log in, and log out of the application securely with 1 hour expiration time working syncronously. Each time a new user is created, the users object in the events.json file is added.
- Protected routes: Certain routes are protected and can only be accessed by authenticated users. Examples:
  - /events/:eventId/edit : This route gives us the attribute of editting specfic meetup and posting it.
  - /events/new : This route manages to adding new meetup to the our events.json file's events object.
- Meetup creation: Authenticated users can create their own meetups, providing details such as the meetup name, description, date, and image.
- Meetup management: Users can edit or delete the meetups they have created.

## Dependencies

The Meetup App relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-router-dom: A routing library for React applications.
- react-router-dom hooks: A set of hooks that provide access to the React Router functionality.
- Other dependencies: These dependencies will vary based on your project requirements. Make sure to include them in your `package.json` file.

## Installation

To run the Meetup App locally, follow these steps:

1. Download project from this branch <> Code button from the link of: https://github.com/fadimedurna/Works-on-React-and-Related-Technologies/tree/adding-authentication

2. Navigate to the project directory for both frontend and backend separately with "cd [directory]" command.

3. Install the dependencies for both folder:

npm install

4. Start the development server for both backend and frontend:

npm start

5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

Once the Meetup App is running, you can start exploring its features:

1. Sign up for a new account if you don't have one already.

2. Log in using your credentials.

3. Browse and search for meetups.

4. Create your own meetup or you can look at the other ones.

5. Manage your meetups through the provided options (edit or delete).

6. Log out when you're done.
