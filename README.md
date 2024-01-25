# Cat custom backend

In this project, we have created a basic server with Express.js and integrated [The Cat API](https://docs.thecatapi.com/) to display random cat images.

## Project Setup

Before getting started, make sure you have `Node.js` and `npm` installed on your machine. You can download them [here](https://nodejs.org/).

1. Clone this repository or download the source code.

```
git clone https://github.com/Mariovc/cats.git
cd cats
```

2. Install project dependencies.

```
npm install
```

## Running the server
```
node app.js
```
The server will be available at http://localhost:3000.

**Note:** If you are running an Android emulator, your server endpoint should be `10.0.2.2` instead of localhost as AVD uses `10.0.2.2` as an alias to your host loopback interface

## Available Routes
* **/cats**: Route to get a list of random bengal cats from The Cat API.

## Used Dependencies
* [Express.js](https://expressjs.com/): A web framework for Node.js.
* [Axios](https://axios-http.com/): A library for making HTTP requests from Node.js.
