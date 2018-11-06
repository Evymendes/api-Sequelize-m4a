'use strict';
const { User } = require('../models');

module.exports = class Users {
  constructor(router) {
    this.router = router;
  }

  expose() {
    this.buscar();
    this.abelhaEmel();
    this.pescoco();
  }

  buscar() {
    this.router.get('/users', (req, res) => {
      User.findAll()
        .then(users => {
          res.json(users)
        })
        .catch(err => {
          res.json(err)
        })
    });
  }

  abelhaEmel() {
    this.router.post('/users', (req, res) => {
      User.create(req.body)
        .then(users => {
          res.json(users)
        })
        .catch(err => {
          res.json(err)
        })
    });
  }

  pescoco() {
    this.router.post('/users/:id', (req, res) => {
      User.find({ where: { id: req.params.id } })
        .then(users => {
          res.json(users)
        })
        .catch(err => {
          res.json(err)
        })
    });
  }
};