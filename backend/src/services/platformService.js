const platformRepository = require('../repositories/platformRepository');

// Obtém todos as categorias
async function getAllPlatforms() {
  return await platformRepository.getAllPlatforms();
}

async function createPlatform(platformData){
  console.log('service')
  return await platformRepository.createPlatform(platformData);
}

async function updatePlatform(platformUpdateData){
  return await platformRepository.updatePlatform(platformUpdateData);
}

module.exports = {
    getAllPlatforms,
    createPlatform,
    updatePlatform,
};
