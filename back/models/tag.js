const mongoose = require ('mongoose'); 

let tagSchema = new mongoose.Schema ({
    libelle: {
        type: 'string', 
    }, 
})

module.exports = mongoose.model ('Tag', tagSchema); 