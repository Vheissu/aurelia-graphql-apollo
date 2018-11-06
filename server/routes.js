import express from 'express';
import users from './models/users.json';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

const router = express.Router();

router.get('/users', (req, res, next) => {
  return res.json(users);
});

router.get('/users/:userId', (req, res, next) => {
  const findUser = find(users, { id: `${req.params.userId}` });

  if (findUser) {
    return res.json(findUser);
  }

  return res.status(400).json({ error: 'USER_NOT_FOUND' });
});

router.delete('/users/:userId', (req, res, next) => {
  const findUserIndex = findIndex(users, { id: `${req.params.userId}` });

  if (findUserIndex) {
    users.splice(findUserIndex, 1);

    return true;
  }

  return false;
});

export default router;
