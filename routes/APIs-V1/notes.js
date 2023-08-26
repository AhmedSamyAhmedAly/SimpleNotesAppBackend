const express = require("express");
const router = express.Router();
const notesController = require('../../controllers/notesController');
const { validateRequest } = require("../../middlewares/validateSchema");
const { createNoteSchema , updateNoteSchema } = require('../../Validators/notesValidationSchema');



router.post('/', [ validateRequest(createNoteSchema) ] , notesController.createNote)

router.patch('/:id', [ validateRequest(updateNoteSchema) ] , notesController.updateNote)

router.get('/', notesController.getAllNotes)

router.get('/:id', notesController.getNoteById)

router.delete('/:id' , notesController.deleteNote)


module.exports = router;
