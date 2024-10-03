const express = require('express');
const app = espress();
const db = require('./dataBase')
const dbcontext = db.veiculosDataBase()

app.use(express.json());

app.listen(3001, () => {
    console.log('Servidor iniciado.')
})


//GET
app.get('/veiculos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
})

//GET by ID
app.get('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

//POST
app.post('/veiculos', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

//PUT
app.put('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

//DELETE
app.delete('/veiculos/:id', async (req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send('Veículo excluído com sucesso.')
})