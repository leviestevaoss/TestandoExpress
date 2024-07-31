const express = require('express')
const app = express();

let produtos = [
    {
        id: 1,
        nome: 'Mesa',
        preco: 300
    },

    {
        id: 2,
        nome: 'Cadeira',
        preco: 200
        
    },

    {
        id: 3,
        nome: 'Monitor',
        preco: 400
    }
]

let Users = [
    {
        id: 1,
        nome: 'Russinho',
        idade: 20
       
    },

    {
        id: 2,
        nome: 'Russel',
        idade: 19
       
    },

    {
        id: 3,
        nome: 'Levi',
        idade: 18
    },

    {
        id: 4,
        nome: 'Dornez',
        idade: 17
    }
]

app.use(express.json());


app.get('/',(req,res) =>{
    res.send('Hello World');
});

app.get('/sobre',(req,res) =>{
    res.send('Sobre')
});

app.get('/produtos',(req,res)  =>{
    res.json(produtos);
});

// app.get('/Users',(req,res) =>{
//     res.json(Users)
// })

app.get('/Users/:id', (req,res) =>{
    const id = req.params.id;
    const user = Users.find(user => user.id == id);
    if(user){
        res.json(user);
    }else{
        res.status(404).send('Not Found')
    }
})

app.get('/Users',(req,res) =>{
    const nome  = req.query.nome;
    const usuario = Users.find(usuario => usuario.nome == nome);
    res.status(200);
    res.json(usuario);
})

app.listen(3000, () =>{
    console.log('servidor esta rodando!')
})

// app.post('/Users',(req,res) =>{
//     const usuario = req.body;
//     if(!usuario || !usuario.nome){
//         objErro = {
//             statusCode:400,
//             mensagem: 'Usuario Inválido'
//         }
//         res.status(400).json(objErro)
//         return;
//     }
// })