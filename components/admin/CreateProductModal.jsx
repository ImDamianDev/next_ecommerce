import React, { useState } from "react";

const CreateProductModal = ({ handleProductCreation }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          img,
          price,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      // Si el producto se crea correctamente, puedes realizar alguna acción adicional
      // como cerrar el modal, actualizar la lista de productos, etc.

      // Simulación de creación exitosa
      setSuccessMessage("¡Producto creado exitosamente!");

      // Limpia los campos después de la creación
      setTitle("");
      setDescription("");
      setImg("");
      setPrice("");

      // Actualiza la lista de productos
      if (handleProductCreation) {
        handleProductCreation(res); // Pasa la respuesta `res` como el nuevo producto creado
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="modal fade"
      id="createProductModal"
      tabIndex="-1"
      aria-labelledby="createProductModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="createProductModalLabel">
              Nuevo Producto
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
