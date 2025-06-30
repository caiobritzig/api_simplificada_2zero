const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.put('/:id', ctrl.updateName);
router.delete('/:id', ctrl.remove);

module.exports = router;