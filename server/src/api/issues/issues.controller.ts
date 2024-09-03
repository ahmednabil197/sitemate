import { NextFunction, Request, Response } from "express";

export async function findAll(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'ack find all!',
  });
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'ack fine one!',
  });
}

export async function createOne(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'create one!',
  });
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'update one!',
  });
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'delete one!',
  });
}