import React, { useState } from "react";

const EditProductModal = ({ setUpdatedProducts, product }) => {

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [img, setImg] = useState(product.img);
  const [price, setPrice] = useState(product.price);
  const [categories, setCategories] = useState(product.categories);
  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);
  const [quantity, setQuantity] = useState(product.quantity);
  const [available, setAvailable] = useState(product.available);
  const [rating, setRating] = useState(product.rating);
  const [freeShipping, setFreeShipping] = useState(product.freeShipping);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos actualizados del producto
    const updatedProduct = {
      _id: product._id,
      title,
      description,
      img,
      price,
      categories,
      size,
      color,
      quantity,
      available,
      rating,
      freeShipping,
    };

    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: 'PUT', // O PATCH según corresponda
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (res.ok) {
        // Actualizar el estado de los productos con los datos actualizados
        setUpdatedProducts((prevProducts) =>
          prevProducts.map((prevProduct) =>
            prevProduct._id === product._id ? updatedProduct : prevProduct
          )
        );

        setIsEditing(false); // Cerrar el formulario de edición
      } else {
        // Manejar el caso de error en la respuesta del servidor
        setError('Error al actualizar el producto');
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      setError('Error al actualizar el producto');
    }
  };


  const handleDeleteProduct = async (productId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setUpdatedProducts((products) => products.filter((product) => product._id !== productId));
          // Cierra el modal al eliminar el producto
          const modal = document.getElementById("editProductModal");
          const modalInstance = bootstrap.Modal.getInstance(modal);
          modalInstance.hide();
        } else {
          setError("Error al eliminar el producto");
        }
      } catch (error) {
        setError("Error al eliminar el producto");
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="editProductModal"
      tabIndex="-1"
      aria-labelledby="editProductModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editProductModalLabel">
              Editar Producto
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleEditSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categories" className="form-label">
                  Categorías
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="categories"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="size" className="form-label">
                  Tamaño
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="available" className="form-label">
                  Disponible
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="available"
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Valoración
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="freeShipping" className="form-label">
                  Envío gratuito
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="freeShipping"
                  checked={freeShipping}
                  onChange={(e) => setFreeShipping(e.target.checked)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Confirmar
              </button>
            </form>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteProduct(product._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
