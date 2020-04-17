const mongoose = require ('mongoose'); 
const geoCoder = require ('../utils/geocoder'); 

let assoSchema = new mongoose.Schema ({
    nameAsso: {
        type: 'string', 
        required: [true, 'Please add a name']
    },
    
    contact: {
        type: 'string', 
    }, 

    address: {
        type: String,
        required: [true, 'Please add an address']
    },

    location: {
        coordinates: { type: ["Number"], index:'2dsphere' }, 
        type: { type: "string", enum: ['Point']  },
        formattedAddress: { type: "string" },
        city: {type: 'string'}, 
    },

    category: {
        type: 'string', 
    }, 

    description: {
        type: 'string', 
    }, 

    tagId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Tag'
    }],
}); 

// Convert address to geoCode : 
assoSchema.pre('save', async function (next) {
    
    const loc = await geoCoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        city: loc[0].city,
        formattedAddress: loc[0].formattedAddress
    };

    // Do not save address
    this.address = undefined;
    next();
});

module.exports = mongoose.model('Asso', assoSchema);