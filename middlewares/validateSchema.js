const validateRequest = (schema, target = 'body') => async (req,res,next) => {
    try {
				req[target] = schema.validateSync(req[target])
				next()
		} catch (ex) {
			//console.log( ex)
				res.send(ex.errors)
		}
}

module.exports = {
		validateRequest
} 
