// Importar la base de datos
import dbConnect from 'config/db';
import productService from "services/productService";

// Establecer la conexión con la base de datos
dbConnect();

export default async function handler(req, res) {
  // Manejar diferentes métodos HTTP
  switch (req.method) {

    // Obtener todos los productos
    case 'GET':
        try {
          const products = await productService.getAllProducts();
            res.status(200).json(products);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los productos' });
          }
      break;

    // Crear un nuevo producto
    case 'POST':
      try {
        const newProduct = req.body;
        const product = await productService.createProduct(newProduct);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
      }
      break;
      
    // Manejar otros métodos HTTP
    default:
      res.status(405).json({ message: 'Método HTTP no permitido' });
      break;
  }
}
