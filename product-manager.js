const fs = require("fs").promises;

class ProductManager {
  constructor() {
    this.path = "./product.json";

  }
}
addProduct(title, description, price, thumbnail, code, stock)
{
  const isvalid = this.validarElProductInput(title, description, price, thumbnail, code, stock);


  if (title, description, price, thumbnail, code, stock) {
    console.log("Faltan campos");
    return null;
  }
  else
    if (this.products.some(product => product.code === code)) {
      console.error("El producto con el mismo codigo ya existe en la base de datos");
      return null;
    } else {
      const newProduct = {
        id: this.Id++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock

      };
      this.products.push(newProduct);
      return newProduct;
    }
}

getproduct(){
  console.log(this.products);
  return this.products;
}
getProductById(id){
  let product = this.products.find(product.id === id);
  if (product) {
    console.log(product)
    return product;
  }
  else {
    console.log("El productono existe");


  }
}



crearProducts = async (product) => {
  try {
    const productsNew = await this.readProducts();
    productsNew.push(product);
    await this.guardarProducts(productsNew);

  } catch (error) {
    console.log("Error al crear el usuario", error);
  }
}


const archivoProduct = "./archivoProduct.json";

const guardarArchivos = async () => {
  try {

    await fs.promises.writeFile(archivoProduct, json.stringify(productManager, null, 2));
  } catch (error) {
    console.log("Error al guardar", error);
  }
}
guardarArchivos();

const leerArchivoProductos = async () => {
  try {
    const content = await fs.promises.readFile(archivoProduct, "utf-8");
    const arraystNew = JSON.parse(content);
  } catch (error) {

    console.log("Error al leer los products", error);
  }
}






