import { NextFunction, Request, Response } from "express";
import { IssueClass, IssueClassWithId, IssueModel } from "./issue.model";

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

export async function createOne(req: Request<{}, {}, IssueClass>, res: Response<IssueClassWithId>, next: NextFunction) {
  try {
      const result = await IssueModel.create(req.body);
      
      res.status(201).json(result.toJSON())
  } catch(error) {
      next(error)
  }
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