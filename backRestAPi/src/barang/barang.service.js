const { cariBarang, cariBarangID, tambahBarangData, hapusBarangData, editBarang } = require("./barang.repository")

const getAllProduct = async () => {
    const barangs = await cariBarang()
    return barangs
}

const getBarangID = async (id) => {
    const barang = await cariBarangID(id)

    if (!barang) {
        throw Error("Barang Tidak di Temukan")
    }

    return barang
}

const addBarangData = async (newBarangData) => {

    const barangs = await tambahBarangData(newBarangData)

    return barangs
}

const deleteBarangData = async (id) => {
    await getBarangID(id)

    await hapusBarangData(id)

}

const editBarangData = async (id, barangData) => {
    await getBarangID(id)

    const barang = await editBarang(id, barangData)

    return barang;
}

module.exports = {
    getAllProduct,
    getBarangID,
    addBarangData,
    deleteBarangData,
    editBarangData
}