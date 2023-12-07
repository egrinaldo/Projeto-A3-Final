const platformRepository = require('../repositories/platformRepository');

// Obtém todos as categorias
async function getAllPlatforms() {
  return await platformRepository.getAllPlatforms();
}

async function getPlatformByUserId(platformId) {
  return await platformRepository.getAllPlatformsByUserId(platformId);
}

async function createPlatform(platformData) {
  return await platformRepository.createPlatform(platformData);
}

async function updatePlatform(platformUpdateData) {
  return await platformRepository.updatePlatform(platformUpdateData);
}

async function deletePlatform(platformId) {
  return await platformRepository.deletePlatform(platformId);
}

module.exports = {
  getAllPlatforms,
  getPlatformByUserId,
  createPlatform,
  updatePlatform,
  deletePlatform,
};
