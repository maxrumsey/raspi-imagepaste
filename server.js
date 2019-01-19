const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
  host:'localhost',
  port:8000,
  routes: {
        files: {
            relativeTo: Path.join(__dirname, '')
        }
    }
});

// Loads subrouters
const files = [
  require('./routers/image.js'),
  require('./routers/static.js'),
]

// Handles errors
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// Function that loads the server
async function init() {
  await server.register(require('inert'));

  for (var i = 0; i < files.length; i++) {
    for (var j = 0; j < Object.values(files[i]).length; j++) {
      server.route(Object.values(files[i])[j]);
    }
  }


  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// Initialize the server
init()
