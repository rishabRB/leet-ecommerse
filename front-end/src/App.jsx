import Home from "./pages/home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import Success from "./pages/success";
import {
BrowserRouter as Router,
Route,
Routes,
Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  
  const user=useSelector(state=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/products/:category" element={<ProductList />}  />
        <Route path="/product/:productId" element={<Product/>}  />
        <Route path="/cart" element={<Cart/>}  />
        <Route path="/success" element={<Success/>}  />
        <Route path="/register" element={user ?  <Navigate to="/" /> : <Register />}  />
        <Route path="/login" element={user ?  <Navigate to="/" /> : <Login/>} />
      </Routes>
    </Router>
  )
  
};

export default App;