const express = require("express");
const mongoose = require("mongoose")


const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const brandController = require("./controller/brand-controller")
const categoryController = require("./controller/category-controller")
const subCategoryController = require("./controller/subCategory-controller")
const stateController = require("./controller/state-controller")
const cityController = require("./controller/city-controller")
const customerAddress = require("./controller/customerAddress-controller")
const productController = require("./controller/product-controller")
const vendorController = require("./controller/vendor-controller")
const vendorProductController = require("./controller/vendorProduct-controller")
const cartController = require("./controller/cart-controller")
const statusController = require("./controller/status-controller")
const OrderController = require("./controller/order-controller")
const orderDetailController = require("./controller/order_detail-controller");

const req = require("express/lib/request")
const res = require("express/lib/response");
const customerAddressModel = require("./model/cutomerAddress-model");

//midleware
const app = express()
//cors policy
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header({'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//database
mongoose.connect('mongodb://localhost:27017/ecom', function (err) {
    if (err) {
        console.log("db is not connected");
    } else {
        console.log("db is connected sucessfully");
    }
});

app.get("/", function (req, res) {
    res.write("Welcome")
    res.end()
})



//urls   session
//app.get("/login", sessionController.login)
//app.get("/signup", sessionController.signup)
//app.post("/saveuser", sessionController.saveuser)
/*
app.post("/cities", )
app.get("/cities", )
app.put("/cities", )
app.delete("/cities/:cityId", )
*/

//role
app.post("/roles", roleController.addRole)
app.get("/roles", roleController.getAllRoles)
app.delete("/roles/:roleId", roleController.deleteRole)
app.put("/roles", roleController.updateRole)


//user
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUser)
app.delete("/users/:userId", roleController.deleteRole)
app.put("/users", userController.updateUser)
app.post("/login", userController.login)

//brand
app.post("/brands", brandController.addBrand)
app.get("/brands", brandController.getAllBrands)
app.put("/brands", brandController.updateBrand)
app.delete("/brands/:brandId", brandController.deleteBrands)

//category
app.post("/categories", categoryController.addCategory)
app.get("/categories", categoryController.getAllCategory)
app.get("/categories/:id", categoryController.findOneCategory)
app.put("/categories", categoryController.updateCategory)
app.delete("/categories/:categoryId", categoryController.deleteCategory)


//subCategory
app.post("/subCategories", subCategoryController.addSubCategory)
app.get("/subCategories", subCategoryController.getAllSubCategory)
app.put("/subCategories", subCategoryController.updateSubcategory)
app.delete("/subCategories/:subCategoryId", subCategoryController.deleteSubCategory)


//state
app.post("/states", stateController.addState)
app.get("/states", stateController.getAllState)
app.put("/states", stateController.updateState)
app.delete("/states/:stateId", stateController.deleteState)


//city
app.post("/cities", cityController.addCity)
app.get("/cities", cityController.getAllcity)
app.put("/cities", cityController.updateCity)
app.delete("/cities/:cityId", cityController.deleteCity)


//customerAddress
app.post("/customerAddresses", customerAddress.addCustomerAddress)
app.get("/customerAddresses", customerAddress.getAllCustomerAddress)
app.put("/customerAddresses", customerAddress.updateCustomerAddress)
app.delete("/customerAddresses/:customerAddressId", customerAddress.deleteCustomerAddress)

//product
app.post("/products", productController.addProduct)
app.get("/products", productController.getAllProduct)
app.put("/products", productController.updateProduct)
app.delete("/products/:productId", productController.deleteProduct)

//vendor
app.post("/vendordetails", vendorController.addvendorDetail)
app.get("/vendordetails", vendorController.getAllvendorDetails)
app.delete("/vendordetails/:vendorId", vendorController.deletevendorDetail)
app.put("/vendordetails", vendorController.updatevendorDetails)

//vendor Product
app.post('/vendorProducts', vendorProductController.addvendorProduct);
app.get('/vendorProducts', vendorProductController.getAllvendorProducts);
app.delete('/vendorProduct', vendorProductController.deletevendorProduct);
app.put('/vendorProduct', vendorProductController.updatevendorProduct);


//cart
app.post("/cart", cartController.addCart);
app.delete("/cart/:cartId", cartController.deleteCart);

//status
app.post('/status', statusController.addStatus);
app.get('/status', statusController.getAllStatus);
app.delete('/status/:statusId', statusController.deleteStatus);
app.put('/status', statusController.updateStatus);

//order
app.post('/order', OrderController.addOrder);
app.get('/order', OrderController.getAllOrder);
app.delete('/order/:orderId', OrderController.deleteOrder);
app.put('/order', OrderController.updateOrder);

//order detail
app.post('/orderDetails', orderDetailController.addOrderDetail);
app.get('/orderDetails', orderDetailController.getAllorderDetails);
app.delete('/orderDetails/:orderId', orderDetailController.deleteorderDetail);
app.put('/orderDetails', orderDetailController.updateorderDetails);


//server  
app.listen(3000, function () {
    console.log("server is running at 3000")
})

//how to run
//node index.js
//nodemon index.js