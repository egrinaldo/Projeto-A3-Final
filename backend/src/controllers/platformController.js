const platformService = require('../services/platformService');

// Obtém todos as categorias
async function getAllPlatforms(req, res) {
  try {
    const platforms = await platformService.getAllPlatforms();
    res.json(platforms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar plataformas.' });
  }
}

async function createPlatform(req, res){
  try{
    console.log('controller')
    const platform = await platformService.createPlatform(req.body);
    res.json(platform);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar plataformas.' });
  }
}

module.exports = {
    getAllPlatforms,
    createPlatform,
};
