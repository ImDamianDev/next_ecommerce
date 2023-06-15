// Importar la base de datos
import dbConnect from 'config/db';
import productService from "services/productService";

// Establecer la conexión con la base de datos
dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  // Manejar diferentes métodos HTTP
  switch (method) {
    // Obtener producto
    case "GET":
      try {
        const product = await productService.getProductById(id);
        res.status(200).json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el producto" });
      }
      break;

    // Actualizar producto
    case "PUT":
      try {
        const updatedProduct = await productService.updateProductById(id, body);
        res.status(200).json(updatedProduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el producto" });
      }
      break;

    // Eliminar producto
    case "DELETE":
      try {
        const deletedProduct = await productService.deleteProductById(id);
        res
          .status(200)
          .json({
            message: "Product deleted successfully",
            data: deletedProduct,
          });
      } catch (error) {
        res
          .status(400)
          .json({ message: "Error deleting product", error: error.message });
      }
      break;

    // Manejar otros métodos HTTP
    default:
      res.status(405).json({ message: "Método HTTP no permitido" });
      break;
  }
}
