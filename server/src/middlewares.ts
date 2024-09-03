import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import ErrorResponse from "./api/interfaces/ErrorResponse";
import { ZodError } from "zod";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(error: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  if (res.statusCode === 200) {
      if(error instanceof mongoose.Error.ValidationError || 
         error instanceof ZodError ||
         error instanceof mongoose.Error.CastError && error.kind === 'ObjectId') {
         res.statusCode = 422;
      }
  }
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'stack trace not availble on production' : error.stack,
  });
}