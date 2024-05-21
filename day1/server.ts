import express, { Request, Response, NextFunction } from 'express';
import { userRoutes } from './routes/user.routes';
import {ResponseHandler} from './services/service'


const app = express();
const port = 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("========");
  console.log(req.query);
  console.log("========");
  next();
});

app.use('/user', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
	const url:string = req.url as string 
	const obj = {
		error:""
	}
	// res.status(404).json(obj);
	ResponseHandler.sendError(res, `Not Found >> ${url}`, 404);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);  
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
