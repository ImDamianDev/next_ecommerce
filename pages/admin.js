import { useState, useEffect } from "react";
import CreateProductModal from "../components/admin/CreateProductModal";
import EditProductModal from "../components/admin/EditProductModal";

const AdminPage = () => {
  const [error, setError] = useState(null);
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Función para obtener los productos desde la API
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setUpdatedProducts(data);
      } catch (error) {
        setError("Error al obtener los productos");
      }
    };

    // Llama a la función para obtener los productos al cargar la página
    fetchProducts();
  }, []);

  const handleProductCreation = (newProduct) => {
    setUpdatedProducts((products) => [...products, newProduct]);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <h1>Administrador</h1>

      <hr />
      <br />

      <h3>Productos</h3>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#createProductModal"
      >
        +
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">-</th>
          </tr>
        </thead>
        <tbody>
          {updatedProducts.map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{index + 1}</th>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editProductModal"
                  onClick={() => handleEditProduct(product)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <br />

      <CreateProductModal
        updatedProducts={updatedProducts}
        setUpdatedProducts={setUpdatedProducts}
        handleProductCreation={handleProductCreation}
      />

      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          updatedProducts={updatedProducts}
          setUpdatedProducts={setUpdatedProducts}
        />
      )}
    </div>
  );
};


export default AdminPage;
