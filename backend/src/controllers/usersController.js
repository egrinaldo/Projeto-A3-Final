const userService = require('../services/userService');

// Obtém todos os usuários
async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
}

// Cria um novo usuário
async function createUser(req, res) {
  try {
    console.log('veio do front')
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
}

// Obtém um usuário pelo ID
async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
}

// Atualiza um usuário pelo ID
async function updateUser(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const updatedUser = await userService.updateUser(userId, req.body);
    if (!updatedUser) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
}

// Deleta um usuário pelo ID
async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    const deletedUser = await userService.deleteUser(userId) > 0;
    if (!deletedUser) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    } else {
      res.json({ message: 'Usuário excluído com sucesso.'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
}

// Faz o login 
async function login (req, res){
  const {email, password} = req.body

  console.log('bateu')
  try {
    const user = await userService.login(email, password)
    if (!user){
      return res.status(401).json({error: 'Usuário não encontrado'})
    }
    
    res.status(200).json({user: user})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Erro ao fazer login'})
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
};
