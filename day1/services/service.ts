import { Request, Response, NextFunction } from 'express';

interface RequiredResponse {
  status?: number;
  error?: string;
  data?: any;
}

class ResponseHandler {
  static sendResponse(res: Response, { status = 200, error = "", data = [] }: RequiredResponse): void {
    const response = {
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
