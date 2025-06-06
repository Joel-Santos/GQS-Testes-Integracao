const request  = require('supertest');
const app = require("./app");

describe("Testes de integração - Produtos", ()=>{
    test('Deve criar um produto', async()=>{
        const res = await request(app).post('/produtos').send({nome: 'Vinho'});
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.nome).toBe('Vinho');
    })
    test('Deve listar todos os produtos', async()=>{
        const res = await request(app).get('/produtos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    })

})