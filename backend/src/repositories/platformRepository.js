const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtém todos as categorias
async function getAllPlatformsByUserId(userId) {
    return await prisma.$queryRaw`SELECT * FROM Platform WHERE userId = ${userId}`	
}

async function getPlatformByName(name){
    return await prisma.$queryRaw`SELECT * FROM Platform WHERE name = ${name}`	
}

async function createPlatform(platformData){
   const platformCreated =  await prisma.$executeRaw`INSERT INTO Platform (name, userId)
   VALUES (${platformData.name}, ${platformData.userId});`

   if (platformCreated){
    return getPlatformByName(platformData.name)
   }
}

async function updatePlatform(platformUpdateData){
    const platformUpdated = await prisma.$executeRaw`UPDATE Platform
     SET name = ${platformUpdateData.name}
     WHERE id = ${platformUpdateData.id} AND
     userId =${platformUpdateData.userId};`

    if (platformUpdated){
        return getPlatformByName(platformUpdateData.name)
    }
}

async function deletePlatform(platformId){
    return await prisma.$executeRaw`DELETE FROM Platform WHERE id = ${platformId};`
}

module.exports = {
    getAllPlatformsByUserId,
    createPlatform,
    updatePlatform,
    deletePlatform,
};
