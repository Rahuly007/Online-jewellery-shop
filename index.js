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
const req = require("express/lib/request")
const res = require("express/lib/response");
const customerAddressModel = require("./model/cutomerAddress-model");

//midleware
const app = express()
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


//server
app.listen(3000, function () {
    console.log("server is running at 3000")
})