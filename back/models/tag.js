const mongoose = require ('mongoose'); 

let tagSchema = new mongoose.Schema ({
    libelle: {
        type: 'string', 
    }, 

    eventId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Event'
    }], 

    assoId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Asso'
    }],
})

module.exports = mongoose.model ('Tag', tagSchema); 