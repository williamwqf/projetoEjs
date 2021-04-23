const {buscaProdutos} = require('../models/produtos')


const listarProdutos = async (req, res) => {
    const produtos = await Produtos.findAll();
    res.json(produtos);

}

const buscaProduto = async(req, res) => {
    try {
        const {id} = req.params
        const produtos = await Produtos.buscaProdutos(id);
        res.json(produtos);
        
    } catch (err) {
        res.json({error: err.message});
        
    }

}
const inserirProdutos = async(req, res) => {
    
    
    const novo_produto = {
       
            descricao: 'Nike Blaster',
            marca_id: 1,
            modelo: 'Blaster',
            cor_id: 1,
            tamanho: '38',
            genero: 'Masculino',
            estilo_id: 1,
            preco: 150.00,
            createdAt: new Date(),
            updatedAt: new Date()
          
    }
    const produtos = await Produtos.create(novo_produto);
    res.json(produtos);

}

const inserirProdutosForms = async(req, res) => {
    const {descricao, marca_id, cor_id, modelo, tamanho, genero, estilo_id, preco} = req.body;
    
    const novo_produto = {
       
            descricao,
            marca_id,
            modelo,
            cor_id,
            tamanho,
            genero,
            estilo_id,
            preco,
            createdAt: new Date(),
            updatedAt: new Date()
          
    }
    const produtos = await Produtos.create(novo_produto);
    res.json(produtos);

}

const atualizarProduto = async(req, res) => {
    const {descricao, marca_id, cor_id, modelo, tamanho, genero, estilo_id, preco} = req.body;
    const {id} = req.params
    
    const produto_alterado = {
            
            descricao,
            marca_id,
            modelo,
            cor_id,
            tamanho,
            genero,
            estilo_id,
            preco,
            updatedAt: new Date()
          
    }
    const produtos = await Produtos.update(produto_alterado, {
        where: {
            id: id
        }
    });
    res.json(produtos);

}

    const  deletarProduto = async(req, res) => {
        
        const {id} = req.params
        
    const produtos = await Produtos.destroy({
            where: {
                id: id
            }
        });
        res.json(produtos);

    }


module.exports = {
    listarProdutos,
    buscaProduto,
    inserirProdutos,
    inserirProdutosForms,
    atualizarProduto,
    deletarProduto
}