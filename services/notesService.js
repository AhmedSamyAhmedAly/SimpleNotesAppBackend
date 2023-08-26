const { returnObj } = require('../helpers/general')
const notesRepo = require('../reposatories/notesRepo.js')

exports.getNoteById = async (id) => {
const note = await notesRepo.getNoteById(id)
return returnObj(true,200,note)
}

exports.createNote = async (body) => {
const ifExists =  await notesRepo.getNoteByTitle({title:body.title})
console.log(ifExists)
if (ifExists[0]) return returnObj(false,402,"the title is already exists")
const note = await notesRepo.createNote(body)
return returnObj(true,200,note)
}

exports.deleteNote = async (id) => {
const notes = await notesRepo.deleteNote(id)
return returnObj(true,200,notes)
}

exports.getAllNotes = async () => {
const notes = await notesRepo.getAllNotes()
return returnObj(true,200,notes)
}

exports.editNote = async (id, { title, content }) => {
        if(title) {
                var ifExists =  await notesRepo.getNoteByTitle({title:title})
        }
        if (ifExists[0]) return returnObj(false,402,"the title is already exists")
        const note = await notesRepo.editNote(id,{ title, content })
        return returnObj(true,200,note)
}