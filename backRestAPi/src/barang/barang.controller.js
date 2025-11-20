const express = require('express')
const router = express.Router()

const { getAllProduct, getBarangID, addBarangData, deleteBarangData, editBarangData } = require("./barang.service")

router.get('/', async (req, res) => {
    const barangs = await getAllProduct()

    res.send(barangs)
})
router.get('/:id', async (req, res) => {
    try {
        const barangID = parseInt(req.params.id)
        const barangs = await getBarangID(barangID)

        res.send(barangs)

    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.post('', async (req, res) => {
    try {
        const newBarangData = req.body

        if (!(newBarangData.name && newBarangData.price && newBarangData.description && newBarangData.image)) {
            return res.send("data harus di isi semua")
        }
        const barangs = await addBarangData(newBarangData)

        res.send({
            data: barangs,
            message: "add barang succes"
        })

    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const barangID = req.params.id

        await deleteBarangData(parseInt(barangID))

        res.send("barang hapus succes")

    } catch (error) {
        res.status(400).send(error.message)
    }

})
router.patch('/:id', async (req, res) => {
    try {
        const barangID = req.params.id
        const barangData = req.body

        await editBarangData(parseInt(barangID), barangData)

        res.send({
            message: "mengupdate data succes"
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

})
router.put('/:id', async (req, res) => {
    try {
        // console.log("📥 BODY BACKEND:", req.body); 
        const barangID = req.params.id
        const barangData = req.body

        if (!(barangData.name && barangData.price && barangData.description && barangData.image)) {
            return res.status(400).send("fields missing")
        }
        const barang = await editBarangData(parseInt(barangID), barangData)

        res.status(200).send({
            data: barang,
            message: "mengupdate data succes"
        })
    } catch (error) {
        // console.log("🔥 ERROR PRISMA:", error);  
        res.status(400).send(error.message)
    }
})

module.exports = router;