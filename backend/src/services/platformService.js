const platformRepository = require('../repositories/platformRepository');

// Obtém todos as categorias
async function getAllPlatforms() {
  return await platformRepository.getAllPlatforms();
}

async function getPlatformById(platformId){
  return await platformRepository.getPlatformById(platformId);
}

async function createPlatform(platformData){
  console.log('service')
  return await platformRepository.createPlatform(platformData);
}

async function updatePlatform(platformUpdateData){
  return await platformRepository.updatePlatform(platformUpdateData);
}

async function deletePlatform(platformId){
  return await platformRepository.deletePlatform(platformId);
}

module.exports = {
    getAllPlatforms,
    createPlatform,
    updatePlatform,
    deletePlatform,
    getPlatformById,
};
