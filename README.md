# Task Manager REST API
This is a back-end code repository. 
This is a full featured Task Management REST API back-end built with Node.js, Express and MongoDB.  
<h3> Features include:</h3>
<li> Full CRUD features for User and Task instances.
<li> Hash encryption of passwords and access management with JWT tokens.  
<li> Restricted user access to CRUD operations based on JWT tokens.
<li> Pagination and filtering of server responses to avoid slow page load times.


### API USAGE
All HTTP requests can be made from software such as [Postman](www.getpostman.com).  Postman is free and exists for all major operating systems.

### Live Task-Manger REST API - https://heyprashant-task-manager.herokuapp.com

##

### SETUP INSTRUCTIONS

To use this code you will require an account with [SendGrid](https://signup.sendgrid.com/).  Sign-up is free and no credit card is required to access a free-tier API Key.

Node.js version 12+ and npm must be installed on your machine.  In terminal type the following commands:
```
git clone https://github.com/heyprashant/task-manager-api.git
cd Task-Manger
npm install
mkdir config
cd config
touch dev.env
vim dev.env
```

Insert the following lines in `dev.env`, replacing all `<content>` with your own information:

```
PORT=<port number>
SGMAIL_EMAIL=<your email address>
MONGODB_URL=<mongodb connection string>
SENDGRID_API_KEY=<api key>
JWT_SECRET=<unique key of your choice to generate JSON web tokens>
```

To run the web server return to the root of the repository and type:
```
npm run dev
```
Alternatively you may name `config/prod.env` or `config/test.env` and appropriately run the web server with `npm run prod` or `npm run test`.
<br>
## Run unit tests using jest
```
npm run test
```

## 



For feedback or inquiries please contact me at prashant.p7804@gmail.com
