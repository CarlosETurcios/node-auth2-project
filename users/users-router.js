const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');

router.get('/', restricted, checkRole('student'), (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});
// router.get(
//   '/something',
//   restricted,
//   checkRole('STUDENT'),
//   checkRole('TUTOR'),
//   (req, res) => {
//     res.send('hello');
//   }
// );

module.exports = router;
