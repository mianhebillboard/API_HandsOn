const express = require('express');
const router = express.Router();

const tspot_reservation_schema = require('../Model/tspot_reservation.model')

// get all 
router.get('/', async (req, res) => {
    const result = await tspot_reservation_schema.find({},{__v: 0})
    res.send(result);
})

// get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await tspot_reservation_schema.findById(id, {__v: 0})
    res.send(result);
})

// post
router.post('/', async (req, res, next) => {
    try {
        const result = await tspot_reservation_schema.create(req.body);
        res.send(result);
    } catch (error) {
        res.send(error.message)
    }
})

// patch by id
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const result = await tspot_reservation_schema.findByIdAndUpdate(id, updates)
    res.send(result);
})

// delete by id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await tspot_reservation_schema.findByIdAndDelete(id)
    res.send(result);
})

module.exports = router;