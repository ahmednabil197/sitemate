import express from 'express';
import issuesRoute from './issues/issues.routes';

const router = express.Router();

router.use('/issues', issuesRoute);

export default router;
