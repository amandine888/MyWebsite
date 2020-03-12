const mongoose = require ('mongoose'); 

let assoSchema = new mongoose.Schema ({
    nameAsso: {
        type: 'string', 
    }, 

    adress: [
        { street: { type: 'string'}, }, 
        { district: { type: 'string'}, }, 
        { postCode: { type: 'number'}, }, 
        { city: { type: 'string'}, },
    ], 

    category: {
        type: 'string', 
    }, 

    description: {
        type: 'string', 
    }, 

    tags: [], 
})

module.exports = mongoose.model('Asso', assoSchema);