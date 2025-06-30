const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;