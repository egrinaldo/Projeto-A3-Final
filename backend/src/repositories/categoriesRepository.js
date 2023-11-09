const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtém todos as categorias
async function getAllCategories() {
    return await prisma.category.findMany();
}

module.exports = {
    getAllCategories,
};
