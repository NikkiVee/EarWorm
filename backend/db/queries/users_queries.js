const { db } = require('../index.js');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: 'Received All Users',
    });
  })
  .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  db.one('SELECT * FROM users WHERE id=$1', [Number(req.params.id)])
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: 'Recieved One User',
    });
  })
  .catch(err => next(err));
};

const createUser = (req, res, next) => {
  db.none('INSERT INTO users (username) VALUES (${username})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Created New User',
    });
  })
  .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  db.none('DELETE FROM users WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted User',
    });
  })
   .catch(err => next(err));
};

module.exports = { getAllUsers, getSingleUser, createUser, deleteUser };
