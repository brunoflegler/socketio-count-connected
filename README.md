# socketio-count-connected

The application is a simple example

### Installation

Socket count connected requires [Node.js](https://nodejs.org/) v12+.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/brunoflegler/socketio-count-connected.git socketio-count-connected
$ cd socketio-count-connected
```

Installation is done using the npm install command:

```sh
$ npm install
```

Or run Yarn install command:

```sh
$ yarn install
```

Or run Yarn development:

```sh
$ yarn dev
```

### Run production

To run, first install the dependencies.

Run Pm2 development:

```sh
$ yarn start
```

#### List count users connected

GET /users

```
{"count":0}
```

### simple config index.html

```
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webchat com socketIO</title>

<div class="users">
    <h1> Users </h1>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.0/socket.io.js" integrity="sha512-+l9L4lMTFNy3dEglQpprf7jQBhQsQ3/WvOnjaN/+/L4i0jOstgScV0q2TjfvRF4V+ZePMDuZYIQtg5T4MKr+MQ==" crossorigin="anonymous"></script>
<script>
  const socket =  io.connect('http://localhost:3000', {
    'force new connection': true,
    'resource': 'path/to/socket.io'}
  );

  const run = () => {
    socket.emit('users');
  }

  run();
</script>
```
