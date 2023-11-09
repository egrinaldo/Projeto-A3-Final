const express = require('express')
const gameRouter = require('../src/routes/gameRoutes');
const userRouter  = require('../src/routes/userRoutes')
const categorieRouter = require('../src/routes/categoryRoutes') 
const platformRouter = require('../src/routes/platformRoutes')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Use o middleware cors para habilitar o CORS Any Origin
app.use(cors());

// Use as rotas
app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use('/categories', categorieRouter);
app.use('/platforms', platformRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
