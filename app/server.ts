/* app/server.ts */

// Import everything from express and assign it to the express variable
//import * as express from 'express';

// Import WelcomeController from controllers entry point
//import {WelcomeController} from './server/controllers';

import {App} from './config/express';
// Create a new express application instance
//const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
// App.use('/welcome', WelcomeController);

// Serve the application at the given port
App.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});