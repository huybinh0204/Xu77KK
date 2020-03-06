const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const dbs = require('../server');
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  const sql = "SELECT * FROM orders";
  dbs.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.render('web_view/orders/index', { title:'Orders', orders:rows});
    // res.json(rows)
  })
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const sql = `SELECT * FROM orders WHERE id=${id}`;
  dbs.query(sql, function(err, rows, fields) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.render('web_view/orders/list', { title:'Orders', id_orders:rows[0]});
    // res.json(rows[0])
  })
});

module.exports = router;
