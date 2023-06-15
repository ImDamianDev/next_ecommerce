// Importaciones de librerías externas
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importaciones de proveedores
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/contexts/CartContext";

// Importaciones de componentes internos
import Layout from "@/components/Layout";

// Importaciones de estilos
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

// Componente principal
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Proveedor de sesión */}
      <SessionProvider session={pageProps.session}>
        {/* Proveedor de carrito */}
        <CartProvider session={pageProps.session}>
          <Layout>
            {/* Componente de la página actual */}
            <Component {...pageProps} />
          </Layout>
          {/* Contenedor de notificaciones */}
          <ToastContainer />
        </CartProvider>
      </SessionProvider>
    </>
  );
}
