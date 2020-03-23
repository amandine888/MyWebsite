const mongoose = require ('mongoose');

let mediaSchema = new mongoose.Schema ({
    nameImg: {
        type: 'string', 
    }, 

    url: {
        type: 'string', 
    }, 
})

module.exports = mongoose.model ('Media', mediaSchema); 