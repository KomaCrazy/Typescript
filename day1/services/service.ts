import { Request, Response, NextFunction } from 'express';
const LANG = require('../localization/server.json')

interface RequiredResponse {
  status?: number;
  msg?: string;
  error?: string;
  data?: any;
}

class ResponseHandler {
  static sendResponse(res: Response, { status = 200, msg="", error = "", data = [] }: RequiredResponse): void {
    console.error("LANG",LANG)
    LANG.error
    const response = {
      msg,
      error,
      data
    };


    res.status(status).json(response);
  }

  static sendError(res: Response, error: string, status = 400): void {
    ResponseHandler.sendResponse(res, { status, error });
  }

  static sendSuccess(res: Response, data: any, status = 200): void {
    ResponseHandler.sendResponse(res, { status, data });
  }
}

export { ResponseHandler };
