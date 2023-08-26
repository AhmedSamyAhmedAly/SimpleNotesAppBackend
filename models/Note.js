const mongoose = require("mongoose");

var notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default:false
    }
},
{ timestamps: true }
)

var Note = mongoose.model('Note', notesSchema);

module.exports = Note;