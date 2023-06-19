const express = require('express');
const router = express.Router();
const alunosDB = require('../data/alunos.json');

let alunoLogado = null;

router.get('/', function(req, res, next) {
  if (alunoLogado == null) {
    return res.redirect('/login');
  }

  res.render('home', { aluno: alunoLogado });
});

router.get('/login', function(req, res, next) {
  res.render('login', { error: '' });
});

router.post('/login', function(req, res, next) {
  const aluno = alunosDB.data.find(a => a.matricula === parseInt(req.body.matricula));
  
  if (aluno === undefined) {
    return res.render('login', { error: 'Usuário não cadastrado!' });
  }

  if (aluno.senha !== Buffer.from(req.body.senha).toString('base64')) {
    return res.render('login', { error: 'Senha inválida!' });
  }

  alunoLogado = aluno;

  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  alunoLogado = null;
  res.redirect('/login');
});

router.get('/remember', function(req, res, next) {
  res.send('Não implementado!');
});

module.exports = router;
