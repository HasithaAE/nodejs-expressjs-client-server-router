
const express = require('express');
const router = express.Router();
const controller = require('../services/appService');

router.get('/', controller.form);
router.post('/', controller.formprocess);

module.exports = router