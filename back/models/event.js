const mongoose = require ('mongoose'); 

let eventSchema = new mongoose.Schema ({
    nameEvent: {
        type: 'string', 
    },

    dateEvent: { 
        type: "date",
        default: Date.now(), 
    },

    description: {
        type: 'string',
    },

    location: [
        {street: { type: 'string'}, }, 
    ], 

    tags: [], 
})

module.exports = mongoose.model ('Event', eventSchema); 