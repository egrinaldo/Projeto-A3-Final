const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtém todos as categorias
async function getAllCategories() {
    return await prisma.$queryRaw`SELECT * FROM Category;`
}

async function getByName(name) {
    return await prisma.$queryRaw`SELECT * FROM Category WHERE name = ${name};`
}

async function createCategory(categoryData){
    const categoryCreated = await prisma.$executeRaw`INSERT INTO Category (name) VALUES (${categoryData.name});`

    if (categoryCreated){
        return getByName(categoryData.name);
    }
}

module.exports = {
    getAllCategories,
    createCategory,
};
