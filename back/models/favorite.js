const mongoose = require('mongoose'); 

let favoriteSchema = new mongoose.Schema ({
    total: {
        type: 'number', 
    }, 
})

module.exports = mongoose.model ('Favorite', favoriteSchema); 