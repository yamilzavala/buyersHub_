var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    id: Number,
    nombre: String,
    categoria: String,
    descripcion: String,
    imagen: String,
    estaSuscripto: Boolean
});



module.exports = mongoose.model('Producto', productSchema);