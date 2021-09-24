const mongoose = require('mongoose');

const airqualitySchema = mongoose.Schema({
  ts: { type: Date, required: true },
  aqius: { type: Number, required: true, index: true },
  mainus: { type: String, required: true },
  aqicn: { type: Number, required: true },
  maincn: { type: String, required: true }
});

module.exports = mongoose.model('Airquality', airqualitySchema);