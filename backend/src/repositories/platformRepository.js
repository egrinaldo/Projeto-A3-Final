const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtém todos as categorias
async function getAllPlatforms() {
    return await prisma.platform.findMany();
}

async function createPlatform(platformData){
    console.log('repository')
    return await prisma.platform.create({
        data: {
            name: platformData.name,
            userId: platformData.userId,
        },
    },
    );
}

module.exports = {
    getAllPlatforms,
    createPlatform,
};
