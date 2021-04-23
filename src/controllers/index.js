const { Produtos, Fotos, Marcas} = require('../models');



const index  = async (req, res, next) => {
    const cadprod = await Produtos.findAll({
        raw: true,
        include: [
            {model: Fotos},
            {model: Marcas}
    ]
    

    });
    const produtoFinal = [];
    for (const prod of cadprod) {
        const obj = {
            id: prod.id,
            foto: `${prod.Fotos.nome_arquivo}.jpg`
        }
        produtoFinal.push(obj);
        
    }
    console.log(cadprod);
    res.render('index', { cadprod, active: "active" });
};


module.exports = {
    index,
};