import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

const errorHandleMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: err.status,
      statusCode: err.statusCode,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

export default errorHandleMiddleware;
