const mongoose = require ('mongoose'); 

let Blacklist = new mongoose.Schema ({
    
    token: {
        type: 'string'
    }
});

module.exports = mongoose.model('Blacklist', Blacklist); 