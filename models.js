const mongoose = require('mongoose')
const { usersSchema, notesSchema } = require('./schema')

const Users = mongoose.model( 'Users' , usersSchema)

const Notes = mongoose.model('Notes' , notesSchema)

module.exports = {
    Users,
    Notes
}