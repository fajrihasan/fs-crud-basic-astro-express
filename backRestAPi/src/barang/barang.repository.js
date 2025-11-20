const prisma = require('../db')

const cariBarang = async () => {
    const barangs = await prisma.barang.findMany()

    return barangs
}

const cariBarangID = async (id) => {
    const barangs = await prisma.barang.findUnique({
        where: {
            id
        }
    })

    return barangs
}

const tambahBarangData = async (newBarangData) => {
    const barangs = await prisma.barang.create({
        data: {
            name: newBarangData.name,
            price: newBarangData.price,
            description: newBarangData.description,
            image: newBarangData.image
        }
    })
    return barangs
}

const hapusBarangData = async (id) => {
    await prisma.barang.delete({
        where: {
            id
        }
    })
}

const editBarang = async (id,barangData) => {

    const barang = await prisma.barang.update({
        where: {
            id: parseInt(id)
        }, data: {
            name: barangData.name,
            price: Number(barangData.price),
            description: barangData.description,
            image: barangData.image
        }
    })
    return barang
}

module.exports = {
    cariBarang,
    cariBarangID,
    tambahBarangData,
    hapusBarangData,
    editBarang
}