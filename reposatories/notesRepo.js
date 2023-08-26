const Note = require('../models/Note')

exports.getNoteById = async (id) => {
    let note = await Note.findById(id)
    return note
}

exports.createNote = async (body) => {
    let note = await Note.create(body)
    return note
}

exports.deleteNote = async (id) => {
    let note = await Note.findByIdAndUpdate(id, { isDeleted: true })
    return note
}

exports.getNoteByTitle = async ({ title }) => {
    let note = await Note.find({ title: title, isDeleted: false })
    return note
}

exports.getAllNotes = async () => {
    let note = await Note.find({ isDeleted: false })
    return note
}

exports.editNote = async (id, { title, content }) => {
    if (title) {
        await Note.findByIdAndUpdate(id, { title: title })
    }
    if (content) {
        await Note.findByIdAndUpdate(id, { content: content })
    }
    let note = await Note.findById(id)
    return note
}