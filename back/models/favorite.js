const mongoose = require('mongoose'); 

let favoriteSchema = new mongoose.Schema ({

    userId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }], 

    eventId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Event'
    }], 

    assoId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Asso'
    }],

    tagId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Tag'
    }],


})

module.exports = mongoose.model ('Favorite', favoriteSchema); 