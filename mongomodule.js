var MongoClient = require( 'mongodb' ).MongoClient;
var mongoose = require('mongoose');
// Modele
const Student = require('./db_models/student')

var _db;
var _client;
module.exports = {
    connectToServer: function( dbName, callback ) {
        MongoClient.connect("mongodb://localhost:27017/local", function(err, client) {
            _client = client;
            console.log("Nawiązano połączenie z serwerem");
            _db = client.db(dbName);
            mongoose.connect('mongodb://localhost:27017/local');
            return callback( err );
        } );
    },
    getDb: function() {
        return _db;
    },
    closeConnection: function() {
        _client.close();
    },
    createStudent: function(tImie,tNazwisko,tWiek){
        return new Student({imie:tImie,nazwisko:tNazwisko,wiek:tWiek})
    },
    saveItem: function(tItem){
        tItem.save();
    }
};