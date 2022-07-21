# RingOver task

A node.js project as an backend task for RingOver Intern.

## Features

- API endpoints availabe as per user need
- Authentication and Authorization
- CRUD on Company,User,List and Task
- Filter for Users-list query.

## Lesson Learned

- CRUD operations with MongoDB database locally and on the Atlas platform (in the cloud)
- Fundamentals of Mongoose (MongoDB JS driver): Data models, CRUD operations, data validation, and middleware
- Using the MVC (Model-View-Controller) architecture
- Advanced error handling workflows.

## Tech stacks

- NodeJS - JS runtime environment
- Express - The web framework used
- Mongoose - Object Data Modelling (ODM) library
- MongoDB Atlas - Cloud database service
- JSON Web Token - Security Token
- Postman - API testing

## Demo

<img src="/ScreenShots/Screenshot1.png" width="49%"/> <img src="/ScreenShots/Screenshot2.png" width="49%"/>

## Data Model

<img src="/ScreenShots/data-model.jpg" width="80%"/>

## Setting Up Your Local Environment

If you wish to play around with the code base in your local environment, do the following

```bash
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the neccessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * NODE_ENV=development
    * PORT=3000
    * USER=yourUsername
    * DATABASE=your-mongodb-database-url
    * DATABASE_PASSWORD=your-mongodb-password

    * SECRET=your-json-web-token-secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

* Start the server.
* Your app should be running just fine.
```

Helpful commands

```bash
$ git clone https://github.com/yourGitHubUsername/ringover_task
$ cd ringover_task
$ npm install
$ npm run start_dev(for development)
$ npm run start_prod(for production)
```

## Optimizations

- Arranged and grouped all the variables, functions, middleware as per bussiness rule.
- Implemented MVC(Model-View-Controller) architecture
- Proper organized module structure.
- Advanced error handling methods implementation.

## API Features

API Documentation can be Found [HERE](https://documenter.getpostman.com/view/20551158/UzR1Jh6C).
Try to play around them😜.

## Author

[Pranav108](https://github.com/Pranav108/)
