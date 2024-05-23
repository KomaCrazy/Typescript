import { Request, Response, NextFunction } from 'express';
const LANG = require('../localization/server.json')

interface RequiredResponse {
  status?: number;
  msg?: string;
  error?: string;
  data?: any;
}

interface ClassRequiredResponse{
	lang?:string
}

class ResponseHandler {
	lang?:string

	constructor(params:ClassRequiredResponse) {
        this.lang = params.lang || "en";
    }

  	sendResponse(res: Response, { status = 200, msg="", error = "", data = [] }: RequiredResponse): void {    
	    if (LANG[error]){
	    	error = LANG[error].en
	    }

	    const response = {
	      msg,
	      error,
	      data
	    };

    	res.status(status).json(response);
  	}

  sendError(res: Response, error: string, status = 400): void {
  	const handler = new ResponseHandler({ lang: "en" });
    handler.sendResponse(res, { status, error });
  }

  sendSuccess(res: Response, data: any, status = 200): void {
  	const handler = new ResponseHandler({ lang: "en" });
    handler.sendResponse(res, { status, data });
  }
}

export { ResponseHandler };
