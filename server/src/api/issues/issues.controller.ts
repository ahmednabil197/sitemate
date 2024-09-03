import { NextFunction, Request, Response } from "express";
import { IssueClass, IssueClassWithId, IssueModel } from "./issue.model";
import IdParam from "../interfaces/idParam";
import { paginationSchema } from "../interfaces/paginate";
import { PaginateResult } from "mongoose";

export async function findAll(req: Request, res: Response<PaginateResult<IssueClassWithId>>, next: NextFunction) {
  try {
    const pagination = paginationSchema.parse(req.params);
    const result = await IssueModel.paginate<IssueClassWithId>({}, {
      ...pagination,
    })
    res.json(result);
  } catch(error) {
      next(error);
  }
}

export async function findOne(req: Request<IdParam>, res: Response<IssueClassWithId>, next: NextFunction) {
  try {
    const result = await IssueModel.findById(req.params.id)
    if (!result) {
        res.status(404);
        throw new Error(`Issue with id "${req.params.id}" not found.`);
      }
    res.json(result);
  } catch(error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, {}, IssueClass>, res: Response<IssueClassWithId>, next: NextFunction) {
  try {
    const result = await IssueModel.create(req.body);
    
    res.status(201).json(result.toJSON())
  } catch(error) {
      next(error)
  }
}

export async function updateOne(req: Request<IdParam, {}, IssueClassWithId>, res: Response<IssueClassWithId>, next: NextFunction) {
  try {
      const result = await IssueModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json(result?.toJSON());
  } catch(error) {
      next(error)
  }
}

export async function deleteOne(req: Request<IdParam>, res: Response, next: NextFunction) {
  try {
      await IssueModel.deleteOne({_id: req.params.id})
      res.status(200).json();
  } catch(error) {
      next(error);
  }
}