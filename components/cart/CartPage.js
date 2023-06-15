import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Calcular el precio total de la compra
  const total = cartItems.reduce(
    (accumulator, item) =>
      accumulator + item.product?.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Carrito de compras</h1>

      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.product?._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.product?.title}</td>
                  <td>{item.product?.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveFromCart(item.product?._id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-container d-flex flex-row-reverse">
            <p className="total text-success">Precio total: ${total.toFixed(0)}</p>
          </div>

          <div className="buttons-container d-flex justify-content-end mb-3">
            <Link href="/store" className="btn btn-primary">
              Agregar más productos
            </Link>
            <button className="btn btn-success ms-3">Continuar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
