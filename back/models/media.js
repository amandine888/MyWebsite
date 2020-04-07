const mongoose = require ('mongoose');

let mediaSchema = new mongoose.Schema ({
    nameImg: {
        type: 'string', 
    }, 

    url: {
        type: 'string', 
    }, 

    eventId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Event'
    }], 

    assoId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Asso'
    }],
})

module.exports = mongoose.model ('Media', mediaSchema); 