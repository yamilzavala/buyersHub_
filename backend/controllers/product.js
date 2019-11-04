// Importaciones
const Producto = require('../models/product');
//var mongoosePaginate = require('mongoose-paginate');

//Logica de negocio
function test(req, res) {
    res.status(200).send({
        ok: true,
        message: "Controller de prueba OK"
    });
}


function getProductos(req, res) {
    var desde = req.query.desde || 0;
    desde = Number(desde);

    Producto.find({}, (err, productos) => {
        if (err) {
            return res.status(500).send({
                ok: false,
                message: "Error cargando productos",
                errors: err
            });
        }

        Producto.count({}, (err, conteo) => {
            res.status(200).send({
                ok: true,
                productos,
                total: conteo
            });
        });

    })
        .skip(desde);
    //.limit(3);
}


// function getProductPerPage(req, res) {
//     var page = req.params.page; // ? page : 1;
//     var itemsPerPage = 3;

//     Producto.paginate(page, itemsPerPage, function(err, productos, total) {
//         if (err) {
//             res.status(500).send({ message: 'Error al obtener productos paginados', err });
//         } else {
//             if (!productos) {
//                 res.status(404).send({ message: 'No se encontraron productos' });
//             } else {
//                 return res.status(200).send({
//                     total_items: total,
//                     productos: productos
//                 });
//             }
//         }
//     });
// }


function getProductoById(req, res) {
    var productId = Number(req.params.id);

    Producto.find({ "id": productId }, (err, product) => {
        if (err) {
            res.status(500).send({ message: 'Error al buscar producto', err });
        } else {
            if (!product) {
                res.status(404).send({ message: 'No se encontró el producto buscado' });
            } else {
                res.status(200).send(product);
            }
        }

    });
}


function saveProduct(req, res) {
    var producto = new Producto();

    // Obtener data del body
    var params = req.body;

    //Mapear producto
    productMapper(producto, params);

    producto.save((err, productoGuardado) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar producto', err });
        } else {
            if (!productoGuardado) {
                res.status(404).send({ message: 'El producto no ha sido guardado' });
            } else {
                res.status(200).send({ productoGuardado });
            }
        }
    });
}



function updateProducto(req, res) {
    var productId = req.params.id;
    var update = req.body;
    Producto.findOneAndUpdate({ id: productId }, update, (err, productUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar producto', err });
        } else {
            if (!productUpdated) {
                res.status(404).send({ message: 'No se encontro el producto a actualizar' });
            } else {
                res.status(200).send(productUpdated);
            }
        }
    });
}


function eliminarProducto(req, res) {
    var productId = req.params.id;

    Producto.findByIdAndDelete(productId, (err, productDeleted) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar producto', err });
        } else {
            if (!productDeleted) {
                res.status(404).send({ message: 'No se encontró el producto a eliminar' });
            } else {
                res.status(200).send(productDeleted);
            }
        }

    });
}



//Mapeador
function productMapper(product, params) {
    product.id = params.id ? params.id : 'null';
    product.nombre = params.nombre ? params.nombre : 'null';
    product.categoria = params.categoria ? params.categoria : 'null';
    product.descripcion = params.descripcion ? params.descripcion : 'null';
    product.imagen = params.imagen ? params.imagen : 'null';
    product.imagenes = params.imagenes ? params.imagenes : 'null';
    product.estaSuscripto = params.estaSuscripto ? params.estaSuscripto : 'false';
    product.cantidadSuscripciones = params.cantidadSuscripciones ? params.cantidadSuscripciones : 'null';
}



module.exports = {
    test,
    getProductos,
    saveProduct,
    getProductoById,
    updateProducto,
    eliminarProducto
    //getProductPerPage
}