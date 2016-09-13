var mongoose = require('mongoose');
var Client = require('./client');

var visitSchema = {
    client : Client.clientSchema,
    visit_date : {
        type : Date,
        required: true
    },
    sales_quantity : {
        type: Number,
        required: true
    },
    value_received : {
        type: Number,
        required: true
    }
};

module.exports = new mongoose.Schema(visitSchema);
module.exports.visitSchema = visitSchema;
