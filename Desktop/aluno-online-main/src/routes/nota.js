const express = require('express');
const router = express.Router();
const Nota = require('../models/nota');
const notasDB = require('../data/notas.json');

router.get('', function (req, res, next) {
    const notas = [];
    notasDB.data.forEach(function(item, index) {
        const nota = new Nota(item.disciplina, item.a1, item.a2, item.a3);
        notas.push(nota);
    });
    res.render('notas/lista', { notas: notas });
});

module.exports = router;