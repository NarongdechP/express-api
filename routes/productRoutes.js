const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// 📌 ดึงข้อมูลสินค้าทั้งหมด
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 📌 เพิ่มสินค้าใหม่
router.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;