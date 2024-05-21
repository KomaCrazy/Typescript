import express, { Request, Response, NextFunction } from 'express';
import { userRoutes } from './routes/user.routes';
import {ResponseHandler} from './services/service'
import multer from 'multer';

const app = express();

const port = 3000;
const upload = multer();
app.use(upload.none());



app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("========");
  // console.log(req.query);
   const data = req.body.box; // รับข้อมูลจาก form-data
    console.log(data);
  console.log("========");
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
	const url:string = req.url as string 


	ResponseHandler.sendError(res,"not_found", 404);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	const url:string = req.url as string   
  console.error(err.stack);  
  ResponseHandler.sendError(res, `Something went wrong >> ${url}`, 500);
});


app.use('/', (req: Request, res: Response, next: NextFunction) => {

});

app.use('/user', userRoutes);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
