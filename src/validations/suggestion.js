const yup = require('yup')

const suggestionSchema = yup.object({
    suggestion: yup.string().min(3).required()
}) 

module.exports = suggestionSchema