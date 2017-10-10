const partsRouter = require('express').Router()

const partsController = require('../controllers').partsController

partsRouter.route('/parts')
  .get(partsController.getAll)
  .post(partsController.create)
partsRouter.route('/parts/:id')
  .get(partsController.getSingle)
  .put(partsController.update)
  .delete(partsController.destroy)

module.exports = partsRouter
