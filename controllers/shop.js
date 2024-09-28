const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { products: products, pageTitle: "Products", path: "/products" });
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId
  Product.findById(productId, product => {
    console.log(product)
  });
  res.redirect('/');
}

exports.getProductDetails = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-detail", { products: products, pageTitle: "Product Details", path: "/product-details" });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", { 
      products: products, 
      pageTitle: "Home", path: "/" });
  });
};


exports.getCart = (req, res, next) => {
    res.render("shop/cart", { 
      pageTitle: "Your Cart", path: "/cart" });
};


exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { 
    pageTitle: "Orders", path: "/orders" });
};

exports.getCheckout = (req, res, next) => {
  // Product.fetchAll((products) => {
    res.render("shop/checkout", { 
      // products: products, 
      pageTitle: "Checkout", path: "/checkout" });
  // });
};


