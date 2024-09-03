import { Router } from 'express';

import * as IssueController from './issues.controller';

const router = Router();

router.get('/', IssueController.findAll);

router.get(
  '/:id',
  IssueController.findOne,
);

router.post(
  '/',
  IssueController.createOne,
);

router.put(
  '/:id',
  IssueController.updateOne,
);

router.delete(
  '/:id',
  IssueController.deleteOne,
);

export default router;
