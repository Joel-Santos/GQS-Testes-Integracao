const db = require("../../database/database");
exports.criarProduto = (req, res) =>{
    const {nome} = req.body;
    db.run('INSERT INTO produtos (nome) VALUES(?)', 
        [nome], 
        function(err){
            if(err){
                return res.status(500).json({erro: err.message});
            }else{
                res.status(201).json({id: this.lastID, nome})
            }
        }
    )
}
exports.listarProdutos = (req, res) =>{
    db.all('SELECT * FROM PRODUTOS', (err, rows) =>{
        if(err){
            return res.status(500).json({erro: err.message});
        }else{
            res.json(rows);
        }
    })
}