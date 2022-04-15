const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(cors());

//Configurando app para trabalhar com json
app.use(express.json());

//Definir dados paara usar na application
const paletas = [
  {
    id: 1,
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: '/assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Banana com Nutella',
    foto: '/assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Chocolate Belga',
    foto: '/assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Limão',
    descricao: 'Limão',
    foto: 'assets/images/limao.png',
    preco: 6.0,
  },
  {
    id: 5,
    sabor: 'Maracuja',
    descricao: 'Maracuja',
    foto: 'assets/images/maracuja.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Milho Verde',
    descricao: 'Milho Verde',
    foto: 'assets/images/milho-verde.png',
    preco: 10.0,
  },
];

app.get('/', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/find-paletas/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});


/*
[GET] Leitura de todas as paletas (0,8 pontos);
[GET] Leitura de paletas individuais (por ID) (0,8 pontos).
[POST] Criação de paletas (0,8 pontos);
[PUT] Edição de paletas por ID (0,8 pontos);
[DELETE] Exclusão de paletas por ID (0,8 pontos).
*/


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


