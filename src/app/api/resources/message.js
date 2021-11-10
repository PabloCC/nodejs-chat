const express = require('express');
const messageService = require('../../domain/services/message');

const RESOURCE_NAME = '/messages';
const router = new express.Router();

router.get(RESOURCE_NAME, messageService.get);
router.post(RESOURCE_NAME, messageService.post)

module.exports = router;