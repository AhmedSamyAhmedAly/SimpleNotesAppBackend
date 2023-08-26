const yup = require("yup");



const createNoteSchema = yup
.object({
	title: yup.string().required("title is required"),
	content: yup.string().required("content is required"),
})
.required();


const updateNoteSchema = yup
.object({
	title: yup.string().optional(),
	content: yup.string().optional()
})
.required();



module.exports = {
	createNoteSchema,
	updateNoteSchema
};