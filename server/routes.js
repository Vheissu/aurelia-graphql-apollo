import express from 'express';
import users from './models/users.json';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

const router = express.Router();

router.get('/users', (req, res, next) => {
  return res.json(users);
});

router.post('/users', (req, res, next) => {
  const user = req.body;

  if (user) {
    users.push(user);

    return res.status(200).send(user);
  }

  return res.status(400).send(false);
});

router.get('/users/:userId', (req, res, next) => {
  const findUser = find(users, { id: `${req.params.userId}` });

  if (findUser) {
    return res.json(findUser);
  }

  return res.status(400).json({ error: 'USER_NOT_FOUND' });
});

router.put('/users/:userId', (req, res, next) => {
  const findUserIndex = findIndex(users, { id: `${req.params.userId}` });

  if (findUserIndex >= 0) {
    const user = { ...users[findUserIndex], ...req.body };

    users.splice(findUserIndex, 1, user);

    return res.status(200).send(user);
  }

  return res.status(400).send(null);
});

router.delete('/users/:userId', (req, res, next) => {
  const findUserIndex = findIndex(users, { id: `${req.params.userId}` });

  if (findUserIndex >= 0) {
    users.splice(findUserIndex, 1);

    res.status(200).send(true);
  }

  res.status(200).send(false);
});

export default router;
