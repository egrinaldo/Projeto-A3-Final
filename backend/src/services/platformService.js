const platformRepository = require('../repositories/platformRepository');

// Obtém todos as categorias
async function getAllPlatforms() {
  return await platformRepository.getAllPlatforms();
}

async function createPlatform(platformData){
  console.log('service')
  return await platformRepository.createPlatform(platformData);
}

module.exports = {
    getAllPlatforms,
    createPlatform,
};
