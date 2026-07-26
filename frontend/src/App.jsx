//import Shop from './pages/Shop';
//import ProductDetail from './pages/ProductDetail';
//import Cart from './pages/Cart';
//import Checkout from './pages/Checkout';
//import Profile from './pages/Profile';
//import OrderSuccess from './pages/OrderSuccess';
//import About from './pages/About';
//import Disclaimer from './pages/Disclaimer';
//import ReturnPolicy from './pages/ReturnPolicy';
//import AdminProducts from './admin/AdminProducts';
//import AdminOrders from './admin/AdminOrders';
//import AdminUsers from './admin/AdminUsers';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Admin/components/ProtectedRoute";
import AdminLogin from "./Admin/AdminLogin.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import Dashboard from "./Admin/pages/Dashboard.jsx";
import Products from "./Admin/pages/Products.jsx";
import Deals from "./Admin/pages/Deals.jsx"
import AddProduct from "./Admin/pages/AddProduct.jsx"
import EditProduct from "./Admin/pages/EditProduct.jsx"
import AddDeal from "./Admin/pages/AddDeal.jsx"
import EditDeal from "./Admin/pages/EditDeal.jsx"


import { CartProvider } from "./context/CartContext";
import "./App.css";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx"
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetails.jsx";
import Product from "./pages/Product.jsx";
import Deal from "./pages/Deal.jsx";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/*Home Page */}
          <Route path="/" element={<Home />} />
          {/*Product Page */}
          <Route path="/Product" element={<Product />} />
          {/*Deals Page */}
          <Route path="/Deal" element={<Deal />} />
          

          {/*Admin Login Page */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} /> 
            <Route path="/admin/edit-product/:id" element={<EditProduct/>} /> 
            <Route path="deals" element={<Deals/>}/>
            <Route path="add-deal" element={<AddDeal />} /> 
            <Route path="/admin/edit-deal/:id" element={<EditDeal/>} /> 
            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
          </Route>

          {/*User Login Page */}
          <Route path="/Login" element={<Login />} />
          {/*User SignUp Page */}
          <Route path="/SignUp" element={<SignUp />} />
          {/* Cart Page */}
          <Route path="/Cart" element={<Cart />} />
          {/*ProductDetail Page */}
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
