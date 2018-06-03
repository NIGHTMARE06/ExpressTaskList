const express = require('express')
const router = express.Router()

const controller = require('../controllers')

router.get('/', controller.index)

router.get('/list', controller.list)

router.post('/new-task', controller.newTask)

module.exports = router
