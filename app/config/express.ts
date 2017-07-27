import * as express from 'express';
import * as path    from "path";
const app: express.Application = express();

import {WelcomeRouter}  from './../server/routes';
import {IndexRouter}    from './../server/routes';


app.use('/welcome', WelcomeRouter);
//app.use('/',        IndexRouter);

  app.use(express.static('./build/public'));

export const App = app;