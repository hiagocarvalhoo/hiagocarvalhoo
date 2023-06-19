const express = require('express');
const router = express.Router();
const disciplinasDB = require('../data/disciplinas.json');
const requerimentosDB = require('../data/requerimentos.json');

router.get('', function(req, res, next) {
  res.render('requerimentos/lista', { requerimentos: requerimentosDB.data });
});

router.get('/novo', function(req, res, next) {
  res.render('requerimentos/novo', { disciplinas: disciplinasDB.data });
});

router.post('/novo', function(req, res, next) {
  const requerimento = {
    id:  Math.floor(100000 + Math.random() * 900000),
    disciplina: req.body.disciplina,
    prova: req.body.prova,
    argumentacao: req.body.argumentacao,
    situacao: "Pendente",
    estilo: "badge-warning"
  }

  requerimentosDB.data.push(requerimento);

  res.redirect('/requerimentos');
});

module.exports = router;
