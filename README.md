# db-app
Simple database application with intuitive create, retrieve, update, delete (CRUD) functions. Built on MERN stack - MongoDB, ExpressJS, React, NodeJS.

In addition, the application uses Webpack and Babel for bundling/loading, and Mongoose for interfacing with the database. The client side is made from the create-react-app template.

The application is divided into separate client and server parts.

## Quick start

Requires:
- nodeJS
- npm
- MongoDB

In a first terminal:
```
git clone https://github.com/brendan-holmes/db-app.git
cd db-app
cd server
npm install
npm run dev-server
```
In a second terminal:
```
npm run dev-bundle
```

In a third terminal
```
cd ../client
npm install
npm start
```

## Credits
This application was closely based on [this Medium tutorial by Sam Barros][1], with help from [this Node and React guide by Samer Buna][2].

[1]: https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
[2]: https://jscomplete.com/learn/1rd-reactful
