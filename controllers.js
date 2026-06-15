const { Users, Notes } = require('./models')

const getUsers = async (req, res, next) => {

    const data = await Users.find()

    try {
        res.status(200).json({
            message: `Show all users`,
            data: data
        })
    } catch (error) {
        next(error)
    }

}

const postLoginUsers = async (req, res, next) => {

    const { user, password } = req.body

    const data = await Users.findOne({ user, password })

    try {
        res.status(200).json({
            message: `Show all users`,
            data
        })
    } catch (error) {
        next(error)
    }

}

const postRegisterUsers = async (req, res, next) => {

    const { user, password } = req.body

    const newUser = new Users({user , password})
    await newUser.save()

    try {
        res.status(200).json({
            message: `Show all users`,
            data: newUser,
            testing : {
                user , password
            }
        })
    } catch (error) {
        next(error)
    }

}

const getNotes = async (req, res, next) => {

    const data = await Notes.find()

    try {
        res.status(200).json({
            message: `Show me all notes`,
            data
        })
    } catch (error) {
        next(error)
    }
}

const postNotes = async (req, res, next) => {

    const { title, content, favorite } = req.body

    const newNote = new Notes({title, content, favorite})

    await newNote.save()

    const data = await Notes.find()

    try {
        res.status(200).json({
            message: `Post a note`,
            data
        })
    } catch (error) {
        next(error)
    }
}

const putNotes = async (req , res , next) =>{

    const {_id} = req.params
    const { title , content , favorite } = req.body

    await Notes.findByIdAndUpdate( _id, { title , content , favorite })

    const data = await Notes.find()

    try{
        res.status(200).json({
            message:`Edit note`,
            data
        })
    } catch(error){
        next(error)
    }
}

const deleteNotes = async ( req , res ,  next)=>{

    const{_id}= req.params

    await Notes.findByIdAndDelete(_id)
    const data = await Notes.find()

    try{
        res.status(200).json({
            message:`Delete note`,
            data
        })
    } catch(error){
        next(error)
    }
}


module.exports = {
    getUsers,
    postLoginUsers,
    postRegisterUsers,
    getNotes,
    postNotes,
    putNotes,
    deleteNotes
}