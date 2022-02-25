const CartModel = require('../model/cart-model');

module.exports.addCart = function (req, res) {
    let user = req.body.user;
    let vendorProduct = req.body.vendorProduct;
    let qty = req.body.qty;

    let Cart = new CartModel({
        user: user,
        vendorProduct: vendorProduct,
        qty: qty
    })

    Cart.save(function (err, data) {
        if (err) {
            res.json({ msg: "Cart Not Add", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Cart Add", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteCart = function (req, res) {
    let cartId = req.params.cartId

    CartModel.deleteOne({ _id: cartId }, function (err, data) {
        if (err) {
            res.json({ msg: "Delete went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete done", data: data, status: 200 })//http status code 
        }
    })
}