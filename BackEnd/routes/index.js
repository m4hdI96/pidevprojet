const express = require('express');

const router = express.Router()

const tourementRoutes = require('./tournamentRoutes')
const commentRoutes = require('./commentRoutes')
const categoryRoutes = require('./categoryRoutes')

router.use('/tourement',tourementRoutes)
router.use('/comment',commentRoutes)
router.use('/category',categoryRoutes)

module.exports = router;