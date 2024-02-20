const express = require("express");
const app = express();
const ProductManager =require("./controllers/product-manager.js");
const productManager = new ProductManager("./src/models/product.json");
const PUERTO=8080;


app.use(express.json());

app.get("/products", async (req,res) => {
    try {
        const limit = req.query.limit;
        const product = await productManager.getProducts();
        if(limit){
            res.json(products.slice(0,limit));
        } else {

        } 
    } catch (error){
        res.status(500).json({error: "Error interno del servidor"})

    }
})

app.get("/products/pid", async (req,res) =>{
    try{
        let id = req.params.pid;
        const product = await productManager.getProductsById(parseInt(id));
        if(!product){
            return res.json({error:"ID no encontrado"});
           
        }
        res.json(product);
    } catch(error){
        res.status(500).json({error: "Error interno del servidor"})
    }

})
//listen del servidor para escuchar puerto
app.listen(PUERTO,() => {
    console.log(`Escuchando puerto: $  {PUERTO}`);
})