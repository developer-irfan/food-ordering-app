import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./context/CartProvider";
import Home from "./Pages/Home";
import OrderFood from "./Pages/OrderFood";

const App = () => {
  //cart state
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //return
  return (
    <CartProvider>
      <Navbar onShowCart={showCartHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <OrderFood cartIsShown={cartIsShown} onHideCart={hideCartHandler} />
          }
        />
      </Routes>
    </CartProvider>
  );
};

export default App;
