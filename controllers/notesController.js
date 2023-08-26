const notesService = require('../services/notesService')


exports.createNote = async  (req, res)  => {     
    try {
        const result = await notesService.createNote(req.body);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return err
    }
}

exports.updateNote = async  (req, res)  => {     
    try {
        const {id} = req.params
        const result = await notesService.editNote(id,req.body);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return err
    }
}

exports.getAllNotes = async  (req, res)  => {     
    try {
        const result = await notesService.getAllNotes();
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return err
    }
}

exports.getNoteById = async  (req, res)  => {     
    try {
        const {id} = req.params
        const result = await notesService.getNoteById(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return err
    }
}

exports.deleteNote = async  (req, res)  => {     
    try {
        const {id} = req.params
        const result = await notesService.deleteNote(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return err
    }
}
