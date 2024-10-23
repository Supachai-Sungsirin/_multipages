import { Outlet } from "react-router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import "./Layout.css";

function Layout({ products, carts, setToken }) {
  return (
    <div>
      <Header />
      <Navbar products={products} carts={carts} setToken={setToken} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
