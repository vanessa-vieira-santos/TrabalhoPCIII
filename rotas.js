
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));



//http://localhost:3000/tela1
app.get('/tela1', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Inicial</title>
      </head>
      <body>
        <h1>Prepare seu garfo!</h1>
        <p>Ola, explorador! O Reserva Rapido sera sua bussola nessa aventura gastronomica!</p>
        <form action="/tela2" method="GET">
          <button type="submit">Avançar</button>
        </form>
      </body>
    </html>
  `);
});

//http://localhost:3000/tela2
app.get('/tela2', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Inicial</title>
      </head>
      <body>
        <h1>Esperar na porta?</h1>
        <p>Nunca mais! </p>
        <p>Com o Reserva Rapido voce entra nas filas sem sair de casa. Fique tranquilo, nos avisamos a hora de sair!</p>
        <form action="/" method="GET">
          <button type="submit">Avançar</button>
        </form>
      </body>
    </html>
  `);
});


//http://localhost:3000/
app.get('/', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Inicial</title>
      </head>
      <body>
        <h1>Reserva marcada!</h1>
        <p>Com o Reserva Rapido voce cria e gerencia suas reservas nos seus lugares favoritos!</p>
        <form action="/bem-vindo" method="GET">
          <button type="submit">Avançar</button>
        </form>
      </body>
    </html>
  `);
});

//http://localhost:3000/bem-vindo?   
app.get('/bem-vindo', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bem-vindo</title>
      </head>
      <body>
        <h1>Bem-vindo!</h1>
        <h2>Login</h2>
        <form action="/telalogin" method="GET">
          <button type="submit">Login</button>
        </form>
        
        <h2>Cadastro</h2>
        <form action="/cadastro" method="GET">
          <button type="submit">Cadastre-se</button>
        </form>
      </body>
    </html>
  `);
});

// http://localhost:3000/telalogin? 
app.get('/telalogin', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
      </head>
      <body>
        <h2>Login</h2>
        <form action="/login" method="POST">
          <label for="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="email" required>
          <label for="loginPassword">Senha:</label>
          <input type="password" id="loginPassword" name="senha" required>
          <button type="submit">Login</button>
        </form>
        <a href="/esqueceu-senha">Esqueceu a senha?</a>
      </body>
    </html>
  `);
});

//http://localhost:3000/cadastro?   
app.get('/cadastro', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bem-vindo</title>
      </head>
      <body>
      
         <h2>Cadastro</h2>
        <form action="/cadastro" method="POST">
          <label for="cadastroNome">Nome:</label>
          <input type="text" id="cadastroNome" name="nome" required>
          <label for="cadastroEmail">Email:</label>
          <input type="email" id="cadastroEmail" name="email" required>
          <label for="cadastroSenha">Senha:</label>
          <input type="password" id="cadastroSenha" name="senha" required>
          <button type="submit">Cadastrar</button>
        </form>
      </body>
    </html>
  `);
});

// http://localhost:3000/esqueceu-senha? 
app.get('/esqueceu-senha', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recuperação de Senha</title>
      </head>
      <body>
        <h2>Recuperação de Senha</h2>
        <form action="/recuperar-senha" method="POST">
          <label for="email">Digite seu email:</label>
          <input type="email" id="email" name="email" required>
          <button type="submit">Recuperar Senha</button>
        </form>
      </body>
    </html>
  `);
});

//http://localhost:3000/inicio?   
app.get('/inicio', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inicio</title>
      </head>
      <body>
      <h1>Navegue pelos tipos de cozinha</h1> 
        <form action="/reserva" method="GET">
          <button type="submit">Reservar</button>
        </form>
        </body>
    </html>
  `);
});

// http://localhost:3000/reserva?  
app.get('/reserva', (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Faça sua reserva</title>
      </head>
      <body>
        <form action="/reserva" method="POST">
          <label for="cadastroNome">Nome:</label>
          <input type="text" id="cadastroNome" name="nome" required>
          <label for="cadastroEmail">Email:</label>
          <input type="email" id="cadastroEmail" name="email" required>
          <label for="qtdPessoas">N° de pessoas:</label>
          <input type="number" id="qtdPessoas" name="qtdPessoas" required>
          <label for="dataReserva">Data da Reserva:</label>
          <input type="date" id="dataReserva" name="dataReserva" required>
          <button type="submit">Confirmar Reserva</button>
        </form>
      </body>
    </html>
  `);
});



// Rota de cadastro 
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // inserindo no BD
  console.log(`Cadastro de usuário: ${nome}, com email: ${email} e senha: ${senha}`);
  res.send(`Cadastro realizado com sucesso! Bem-vindo, ${nome}!`);
});

// Rota para o login 
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  console.log(`Login com email: ${email} e senha: ${senha}`);
  res.redirect('/inicio'); // Redireciona para  tela inicio 

  // Valida no BD
  res.send(`Login realizado com sucesso para ${email}`);
});

// Rota de recuperacao de senha 
app.post('/recuperar-senha', (req, res) => {
  const { email } = req.body;
  console.log(`Solicitação de recuperação de senha para o email: ${email}`);

  res.send(`Instruções de recuperação de senha enviadas para ${email}`);
});


// Rota de reserva 
app.post('/reserva', (req, res) => {
  const { nome, email, qtdPessoas, dataReserva } = req.body;
  console.log(`Reserva confirmada para: ${nome}, ${email}, ${qtdPessoas} pessoas, na data: ${dataReserva}`);
  res.send(`Sua reserva  foi confirmada. No dia, basta chegar ao restaurante e informar que a reserva foi feita pelo aplicativo. Estamos prontos para recebe-lo. Até breve!`);
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
