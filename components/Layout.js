// components/Layout.js
import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Barra de navegación */}
      <header>
        <Navbar />
      </header>

      {/* Contenido principal */}
      <main>{children}</main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Layout;
