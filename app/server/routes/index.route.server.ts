// Import only what we need from express
import { Router, Request, Response } from 'express';
import {IndexController} from "./../controllers";

// Assign router to the express.Router() instance
const router: Router = Router();
const indexController = new IndexController();

// The / here corresponds to the route that the WelcomeRouter
// is mounted on in the server.ts file.
// In this case it's /
router.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    let greeting = indexController.greet(name);
    res.send(greeting);
});

// Export the express.Router() instance to be used by server.ts
export const IndexRouter: Router = router;