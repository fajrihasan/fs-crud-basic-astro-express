const barangService = require("./barang.service")

module.exports = {
    getAllProduct: async (req, res) => {
        const barangs = await barangService.getAllProduct()
        res.send(barangs)
    },
    getBarangID: async (req, res) => {
        const barangID = parseInt(req.params.id)
        const barangs = await barangService.getBarangID(barangID)
        res.send(barangs)
    },
    addBarangData: async (req, res) => {
        const newBarangData = req.body
        const barangs = await barangService.addBarangData(newBarangData)
        res.send(barangs)
    },
    deleteBarangData: async (req, res) => {
        const barangID = parseInt(req.params.id)
        await barangService.deleteBarangData(barangID)
        res.send("barang hapus succes")
    },
    editBarangData: async (req, res) => {
        const barangID = parseInt(req.params.id)
        const barangData = req.body
        const barangs = await barangService.editBarangData(barangID, barangData)
        res.send(barangs)
    }
}

