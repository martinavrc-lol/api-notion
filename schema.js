const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        _id: {type : mongoose.Schema.Types.ObjectId, auto: true },
        user: {type : mongoose.Schema.Types.String, lowercase: true, required: true},
        password : {type : mongoose.Schema.Types.String}

    },
    {
        collection: "users",
        collation: {
            locale: 'es',
            strength : 2
        },
        versionKey : false
    }
)

const notesSchema = new mongoose.Schema (
    {
        _id: {type : mongoose.Schema.Types.ObjectId, auto: true },
        title: {type : mongoose.Schema.Types.String},
        content : {type : mongoose.Schema.Types.String},
        tags : {type : mongoose.Schema.Types.String},
        favorite : {type : mongoose.Schema.Types.Boolean}

    },
    {
        collection: "notes",
        collation: {
            locale: 'es',
            strength : 2
        },
        versionKey : false
    }
)

module.exports = {
    usersSchema,
    notesSchema
}