var mongoose = require("mongoose");
var Area = require('./area');

var clientSchema = {
    name : {
        type: String,
        index: { unique: true },
        required: true,
    },
    telefone : { type: String },
    loc: {
        type: [Number],  // [<longitude>, <latitude>]
        index: "2d"      // create the geospatial index
    },
    address : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    area : {
        type: Area.areaSchema,
        required: true
    },
    frequency : {
        type: Number,
        required: true
    }
};

module.exports = new mongoose.Schema(clientSchema, { timestamps : true});
module.exports.clientSchema = clientSchema;
