const express = require('express')
const { getNotes, getUsers, postNotes, postLoginUsers, postRegisterUsers, putNotes, deleteNotes } = require('./controllers')
const { middleware404, middleware500 } = require('./middlewares')
const router = express.Router()

router.route('/users')
    .get(getUsers)
    .post(postRegisterUsers)

router.route('/users/login')
    .post(postLoginUsers)

router.route('/users/register')
    .post(postRegisterUsers)

router.route('/notes')
    .get(getNotes)
    .post(postNotes)

router.route('/notes/id/:_id')
    .put(putNotes)
    .delete(deleteNotes)

router.all('/{*splat}' ,middleware404)

router.use(middleware500)


module.exports = {
    router
}