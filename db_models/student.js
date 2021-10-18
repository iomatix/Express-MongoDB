const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  imie:  String,
  nazwisko: String,
  wiek:   Number
});


module.exports = mongoose.model('student', studentSchema);



